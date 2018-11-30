module.exports = {
    extends: [
        'plugin:vue/essential'
    ],
    rules:{
        "at-rule-no-unknown": [ true, {
            "ignoreAtRules": [
              "extends",
              "tailwind"
            ]
          }],
    },
}
  