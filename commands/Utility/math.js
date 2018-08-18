const { Command, util: { codeBlock } } = require("klasa");
const math = require("mathjs");

math.import({
  import: () => { throw new Error("Function import is disabled") },
  createUnit: () => { throw new Error("Function createUnit is disabled") },
  eval: () => { throw new Error("Function eval is disabled") },
  parse: () => { throw new Error("Function parse is disabled") },
  simplify: () => { throw new Error("Function simplify is disabled") },
  derivative: () => { throw new Error("Function derivative is disabled") }
}, { override: true });

class MathCommand extends Command {
  constructor(...args) {
    super(...args, {
      description: "Evalutes complex math expressions.",
      usage: "<expression:string>",
      aliases: ["calc", "calculator"]
    });
  }

  async run(msg, [expr]) {
    const res = math.eval(expr);
    return msg.send(`**Expression**${codeBlock("", expr)}\n**Results**${codeBlock("", res)}`);
  }
}

module.exports = MathCommand;