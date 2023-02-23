import jwtPackage from "jsonwebtoken";
const { sign, verify } = jwtPackage; //jsonwebtoken uses only comonJs imports

export const createToken = (user) => {
  const authToken = sign(
    { _id: user._id, mail: user.mail, userType: user.userType },
    process.env.SECRET
  );

  return authToken;
};

export const adminAuthValidation = (req, res, next) => {
  const authToken = req.cookies["auth-token"].authToken;
  const userType = req.cookies["userType"].userType;
  console.log(userType);
  if (userType === "admin") {
    if (!authToken) {
      res.json("not auth for this route");
    } else {
      const decodedToken = verify(authToken, process.env.SECRET);
      if (decodedToken.userType !== "admin") {
        res.json("not auth for this route");
      } else {
        try {
          return next();
        } catch (error) {
          return res.json(error);
        }
      }
    }
  } else {
    next();
  }
};

export const candidatAuthValidation = (req, res, next) => {
  const authToken = req.cookies["auth-token"].authToken;
  const userType = req.cookies["userType"].userType;
  if (userType === "candidat") {
    if (!authToken) {
      res.json("not auth for this route");
    } else {
      const decodedToken = verify(authToken, process.env.SECRET);
      if (decodedToken.userType !== "candidat") {
        res.json("not auth for this route");
      } else {
        try {
          return next();
        } catch (error) {
          return res.json(error);
        }
      }
    }
  } else {
    next();
  }
};

export const recruteurAuthValidation = (req, res, next) => {
  const authToken = req.cookies["auth-token"].authToken;
  const userType = req.cookies["userType"].userType;

  if (userType === "recruteur") {
    if (!authToken) {
      res.json("not auth for this route");
    } else {
      const decodedToken = verify(authToken, process.env.SECRET);
      if (decodedToken.userType !== "recruteur") {
        res.json("not auth for this route");
      } else {
        try {
          return next();
        } catch (error) {
          return res.json(error);
        }
      }
    }
  } else {
    next();
  }
};
