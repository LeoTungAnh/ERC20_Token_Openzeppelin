const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};

const IvirseToken = artifacts.require("IvirseToken");

module.exports = function (deployer) {
  deployer.deploy(IvirseToken);
};