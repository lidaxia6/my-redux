/**
 * 
 * 
 */

function bindActionCreator(craetor, dispatch) {
  return (...args) => dispatch(craetor(...args));
}
export default function bindActionCreators(creators, dispatch) {
  let obj = {};
  for (const key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch);
  }
  return obj;
}
