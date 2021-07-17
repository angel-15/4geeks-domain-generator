/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#Domain").innerHTML = domainGenerator();
  });
  console.log("Angel Restifo - Generador de dominios de paginas Web");
};

let domainGenerator = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net", ".us", ".io"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let extIndex = Math.floor(Math.random() * ext.length);

  return (
    pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + ext[extIndex]
  );
};
