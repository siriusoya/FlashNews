const { Article, User, Customer, Bookmark, Category } = require("../models");
const { Op } = require("sequelize");
const { comparePassword } = require("../helpers/bcryptjs");
const { signToken } = require("../helpers/jwtCustomer");
const { OAuth2Client } = require("google-auth-library");
const axios = require("axios");

class ControllerCustomer {
  static async register(req, res, next) {
    try {
      let role = "Customer";
      let { email, password } = req.body;
      let newCustomer = await Customer.create({
        email,
        password,
        role,
      });
      let data = {
        id: newCustomer.id,
        email: newCustomer.email,
      };
      res.status(201).json({
        message: "Succeeded registering a new customer",
        data,
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      if (!req.body.email || !req.body.password) {
        throw { name: "EmailPasswordisRequired" };
      }

      const checkCustomer = await Customer.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!checkCustomer) {
        throw { name: "UserNotFound" };
      }

      const isAuthenticated = comparePassword(
        req.body.password,
        checkCustomer.password
      );
      if (!isAuthenticated) {
        throw { name: "EmailPasswordInvalid" };
      }

      let payload = {
        id: checkCustomer.id,
      };

      const token = signToken(payload);

      res.status(200).json({
        message: "Login successful",
        access_token: token,
        email: checkCustomer.email,
      });
    } catch (err) {
      next(err);
    }
  }

  static async googleSignIn(req, res, next) {
    try {
      const { google_token } = req.headers;

      const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

      const ticket = await client.verifyIdToken({
        idToken: google_token,
        audience: process.env.GOOGLE_CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();
      //   const userId = payload["sub"];
      // If request specified a G Suite domain:
      // const domain = payload['hd'];

      let customer = await Customer.findOne({
        where: {
          email: payload.email,
        },
      });

      if (!customer) {
        customer = await Customer.create({
          email: payload.email,
          password: String(Math.random()),
          role: "Customer"
        });
      }

      const access_token = signToken({
        id: customer.id,
      });

      res.status(200).json({ access_token });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static showArticles(req, res, next) {
    let search;
    if (!req.query.search) {
      search = "";
    } else {
      search = req.query.search;
    }
    let currentPage = +req.query.page;
    console.log(currentPage, "ke sini po");
    let options = {
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
        },
        Category,
      ],
      order: [["createdAt", "DESC"]],
      where: {
        status: "Active",
        title: {
          [Op.iLike]: `%${search}%`,
        },
      },
    };
    if (req.query.page) {
      options.offset = currentPage * 9 - 9;
      options.limit = 9;
    }

    Article.findAndCountAll(options)
      .then((data) => {
        console.log(data);
        let totalData = data.count;
        let totalPage = Math.ceil(totalData / 9);
        res.status(200).json({
          message: "Succeeded getting articles data",
          data: data.rows,
          currentPage,
          totalData,
          totalPage,
        });
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  }

  static showBookmarks(req, res, next) {
    // console.log(req.customer.id)
    Customer.findByPk(req.customer.id, {
      include: {
        model: Article,
        include: [Category, User],
      },
    })
      .then((data) => {
        res.status(200).json({
          message: "Succeeded getting bookmarks data",
          data: data.Articles,
        });
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  }

  static addBookmark(req, res, next) {
    const { articleId } = req.params;
    let customerIn;
    let bookmarkData;
    Customer.findByPk(req.customer.id)
      .then((customer) => {
        customerIn = customer;
        return Article.findByPk(articleId);
      })
      .then((article) => {
        if (!article) {
          throw { name: "NotFound" };
        } else {
          bookmarkData = article;
          return customerIn.addArticle(article);
        }
      })
      .then(() => {
        res.status(201).json({
          message: "Succeeded adding a new bookmark",
          data: bookmarkData,
        });
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  }

  static async articleById(req, res, next) {
    try {
      let options = {
        where: {
          id: +req.params.id,
        },
        include: [
          {
            model: User,
            attributes: { exclude: ["password"] },
          },
          Category,
        ],
      };

      let article = await Article.findOne(options)
      if (!article) {
        throw { name: "NotFound" };
      } else {

        let qrCodeFound = await axios({
          method: "POST",
          url: "https://api.qr-code-generator.com/v1/create?access-token=-153oH3ufiMtR4y0ffbUADhXuNv3hSHCGlYFkfUBzOBU7L-e9CS1fFpd1D_IyKBc",
          data: {
            frame_name: "no-frame",
            qr_code_text: "https://portofolio-siriusoya.web.app/articles/" + req.params.id,
            image_format: "SVG",
            qr_code_logo: "scan-me-square",
          },
        });
        
        console.log('>>>', qrCodeFound.data, "<<< nih data");

        res.status(200).json({
          message: "Succeeded getting article data",
          data: article,
          qrCode: qrCodeFound.data
        });
      }
    } catch (err) {
      console.log(err);
        next(err);
    }
  }
}

module.exports = ControllerCustomer;

