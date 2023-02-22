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
  const authToken = req.cookies["auth-token"];
  if (!authToken) {
    res.json("not auth for this route");
  } else {
    const decodedToken = verify(authToken, process.env.SECRET);
    if (decodedToken.userType !== "admin") {
      res.json("not auth for this route");
    } else {
      try {
        if (decodedToken) {
          req.authIsValid = true;
          return next();
        }
      } catch (error) {
        return res.json(error);
      }
    }
  }
};

export const candidatAuthValidation = (req, res, next) => {
  const authToken = req.cookies["auth-token"];
  if (!authToken) {
    res.json("not auth for this route");
  } else {
    const decodedToken = verify(authToken, process.env.SECRET);
    if (decodedToken.userType !== "candidat") {
      res.json("not auth for this route");
    } else {
      try {
        if (decodedToken) {
          req.authIsValid = true;
          return next();
        }
      } catch (error) {
        return res.json(error);
      }
    }
  }
};

export const recruteurAuthValidation = (req, res, next) => {
  const authToken = req.cookies["auth-token"];
  if (!authToken) {
    res.json("not auth for this route");
  } else {
    const decodedToken = verify(authToken, process.env.SECRET);
    if (decodedToken.userType !== "recruteur") {
      res.json("not auth for this route");
    } else {
      try {
        if (decodedToken) {
          req.authIsValid = true;
          return next();
        }
      } catch (error) {
        return res.json(error);
      }
    }
  }
};
