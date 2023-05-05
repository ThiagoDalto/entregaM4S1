const verifyUserIsAdminMiddleware = (request, response, next) => {
  const { isAdm } = request.user;
 

  if (!isAdm) {
    return response.status(401).json({
      message: "Missing authorization headers",
    });
  }

  next();
};

export default verifyUserIsAdminMiddleware;
