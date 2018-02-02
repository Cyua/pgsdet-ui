import Sample from "./src/sample"

Sample.install = function (Vue) {
  Vue.component(Sample.name, Sample)
};

export default Sample;
