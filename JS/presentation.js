
let path_to_file = null
path_to_file = localStorage.path_to_file;
const iframe_s = document.querySelector("iframe");
iframe_s.setAttribute("src", path_to_file);
