import * as t from "@babel/types";
console.log(
  t.binaryExpression("+", t.stringLiteral("x"), t.stringLiteral("y"))
);
