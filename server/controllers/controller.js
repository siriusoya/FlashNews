const { Category, User, Article, History } = require("../models");
const { comparePassword } = require("../helpers/bcryptjs");
const { signToken } = require("../helpers/jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");

class Controller {
  static home(req, res) {
    res.status(200).json({
      message: "mashook",
    });
  }

  static async register(req, res, next) {
    try {
      let role = "Admin";
      let { username, email, password, phoneNumber, address } = req.body;
      let newUser = await User.create({
        username,
        email,
        password,
        role,
        phoneNumber,
        address,
      });
      let data = {
        id: newUser.id,
        email: newUser.email,
      };
      res.status(201).json({
        message: "Succeeded registering a new user",
        data,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      if (!req.body.email || !req.body.password) {
        throw { name: "EmailPasswordisRequired" };
      }

      const checkUser = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!checkUser) {
        throw { name: "UserNotFound" };
      }

      const isAuthenticated = comparePassword(
        req.body.password,
        checkUser.password
      );
      if (!isAuthenticated) {
        throw { name: "EmailPasswordInvalid" };
      }

      let payload = {
        id: checkUser.id,
      };

      const token = signToken(payload);

      res.status(200).json({
        message: "Login successful",
        access_token: token,
        email: checkUser.email,
        role: checkUser.role,
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

      let user = await User.findOne({
        where: {
          email: payload.email,
        },
      });

      if (!user) {
        user = await User.create({
          username: null,
          email: payload.email,
          password: String(Math.random()),
          role: "Staff",
          phoneNumber: null,
          address: null,
        });
      }

      const access_token = signToken({
        id: user.id,
      });

      res.status(200).json({ access_token });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static articleList(req, res, next) {
    Article.findAll({
      include: {
        model: User,
        attributes: { exclude: ["password"] },
      },
      order: [["createdAt", "DESC"]],
    })
      .then((data) => {
        res.status(200).json({
          message: "Succeeded getting articles data",
          data,
        });
      })
      .catch((err) => {
        next(err);
      });
  }

  static addArticle(req, res, next) {
    let data;
    let status = "Active";
    let { title, content, imgUrl, categoryId } = req.body;

    function createArticle() {
      return Article.create({
        title,
        content,
        imgUrl,
        categoryId,
        authorId: req.user.id,
        status,
      });
    }

    function createHistory(article) {
      let authorEmail;
      return User.findByPk(req.user.id).then((user) => {
        authorEmail = user.email;
        return History.create({
          title: article.title,
          description: `New article with id ${article.id} created`,
          updatedBy: authorEmail,
        });
      });
    }

    createArticle()
      .then((newArticle) => {
        data = newArticle;
        return createHistory(newArticle);
      })
      .then(() => {
        res.status(201).json({
          message: "Succeeded adding a new article",
          data,
        });
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  }

  static articleById(req, res, next) {
    Article.findByPk(+req.params.id)
      .then((data) => {
        if (!data) {
          throw { name: "NotFound" };
        } else {
          res.status(200).json({
            message: "Succeeded getting article data",
            data,
          });
        }
      })
      .catch((err) => {
        next(err);
      });
  }

  static editArticle(req, res, next) {
    let { title, content, imgUrl, categoryId } = req.body;
    let authorEmail;
    let article;
    Article.findByPk(+req.params.id)
      .then((data) => {
        article = data;
        Article.update(
          { title, content, imgUrl, categoryId },
          {
            where: {
              id: +req.params.id,
            },
          }
        );
      })
      .then(() => {
        return User.findByPk(req.user.id);
      })
      .then((user) => {
        authorEmail = user.email;
        return History.create({
          title: article.title,
          description: `Article with id ${article.id} updated`,
          updatedBy: authorEmail,
        });
      })
      .then(() => {
        res.status(201).json({
          message: "Succeeded editing article",
        });
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  }

  static updateStatus(req, res, next) {
    let { status } = req.query;
    let oldStatus;
    let authorEmail;
    let article;

    Article.findByPk(+req.params.id)
      .then((data) => {
        article = data;
        oldStatus = article.status;
        return Article.update(
          { status },
          {
            where: {
              id: +req.params.id,
            },
          }
        );
      })
      .then(() => {
        return User.findByPk(req.user.id);
      })
      .then((user) => {
        authorEmail = user.email;
        return History.create({
          title: article.title,
          description: `Article with id ${article.id} status has been updated from ${oldStatus} to ${status}`,
          updatedBy: authorEmail,
        });
      })
      .then(() => {
        res.status(201).json({
          message: "Succeeded updating article status",
        });
      })
      .catch((err) => {
        next(err);
      });
  }

  static destroyArticle(req, res, next) {
    let deletedArticle;
    Article.findByPk(+req.params.id)
      .then((data) => {
        deletedArticle = data;
        return Article.destroy({
          where: {
            id: +req.params.id,
          },
        });
      })
      .then((data) => {
        if (!data) {
          throw { name: "NotFound" };
        } else {
          res.status(200).json({
            message: "Article has been deleted",
            data: deletedArticle,
          });
        }
      })
      .catch((err) => {
        next(err);
      });
  }

  static categoryList(req, res, next) {
    Category.findAll()
      .then((data) => {
        res.status(200).json({
          message: "Succeeded getting categories data",
          data,
        });
      })
      .catch((err) => {
        next(err);
      });
  }

  static historyList(req, res, next) {
    History.findAll(
      {
        order: [["createdAt", "DESC"]]
      }
    )
      .then((data) => {
        res.status(200).json({
          message: "Succeeded getting histories data",
          data,
        });
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = Controller;
