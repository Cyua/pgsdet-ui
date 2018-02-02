// import your component here
import Sample from "../packages/sample/index";
import elementUI from "elementUI"

// add your component into the components
const components = [
  Sample,
];


const install = function(Vue, opts = {}){
  components.map(component => {
    Vue.component(component.name, component);
  });
  Vue.use(elementUI);
};


if (typeof window !== "undefined" && window.Vue){
  install(window.Vue)
}

const PgSdetUI = {
  install,
};

for(let component in components){
  Object.assign(PgSdetUI, {component})
}

export default PgSdetUI;
