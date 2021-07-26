const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema(
  {
    1: {
      type: String,
      defalut: "",
    },
    2: {
      type: String,
      defalut: "",
    },
    3: {
      type: String,
      defalut: "",
    },
    // 4: { type: String, defalut: "" },
    // 5: { type: String, defalut: "" },
    // 6: { type: String, defalut: "" },
    // 7: { type: String, defalut: "" },
    8: { type: String, defalut: "" },
    9: { type: String, defalut: "" },
    10: { type: String, defalut: "" },
    11: { type: String, defalut: "" },
    // 12: { type: String, defalut: "" },
    13: { type: String, defalut: "" },
    14: { type: String, defalut: "" },
    15: { type: String, defalut: "" },
    16: { type: String, defalut: "" },
    // 17: { type: String, defalut: "" },
    18: { type: String, defalut: "" },
    // 19: { type: String, defalut: "" },
    20: { type: String, defalut: "" },
    21: { type: String, defalut: "" },
    22: { type: String, defalut: "" },
    // 23: { type: String, defalut: "" },
    24: { type: String, defalut: "" },
    25: { type: String, defalut: "" },
    // 26: { type: String, defalut: "" },
    27: { type: String, defalut: "" },
    28: { type: String, defalut: "" },
    29: { type: String, defalut: "" },
    30: { type: String, defalut: "" },
    31: { type: String, defalut: "" },
    // 32: { type: String, defalut: "" },
    // 33: { type: String, defalut: "" },
    34: { type: String, defalut: "" },
    // 35: { type: String, defalut: "" },
    // 36: { type: String, defalut: "" },
    37: { type: String, defalut: "" },
    38: { type: String, defalut: "" },
    39: { type: String, defalut: "" },
    40: { type: String, defalut: "" },
    41: { type: String, defalut: "" },
    42: { type: String, defalut: "" },
    43: { type: String, defalut: "" },
    // 44: { type: String, defalut: "" },
    45: { type: String, defalut: "" },
    46: { type: String, defalut: "" },
    // 47: { type: String, defalut: "" },
    48: { type: String, defalut: "" },
    49: { type: String, defalut: "" },
    50: { type: String, defalut: "" },

    //file
    51: { type: String, defalut: "" },
    52: { type: String, defalut: "" },
    53: { type: String, defalut: "" },
    54: { type: String, defalut: "" },
    55: { type: String, defalut: "" },
    //file
    56: { type: String, defalut: "" },
    57: { type: String, defalut: "" },
    58: { type: String, defalut: "" },
    59: { type: String, defalut: "" },
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
