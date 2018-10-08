console.log("Shit wroks")

import("./core/test").then(function({
  default: testMod
}: any): Promise<WebAssembly.ResultObject> {
  return testMod().then(function(mod: any) {
    console.log(mod.memory)
    console.log(mod.test("hello"))
    // console.log(mod)
  })
})

console.log("done")
