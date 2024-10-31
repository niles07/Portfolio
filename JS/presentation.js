
let path_to_file = null
//path_to_file = localStorage.getItem('path_to_file')
path_to_file = localStorage.path_to_file;
//let path_to_file = location.search.substring(1)
const iframe_s = document.querySelector("iframe");
console.log(path_to_file)
console.log(iframe_s)
iframe_s.setAttribute("src", path_to_file);