function r(f){/loaded|complete/.test(document.readyState)?f():setTimeout("r("+f+")",9);}
function go() {
    var body = document.getElementsByTagName('body')[0];
    var e = document.createElement('p');
    e.setAttribute('class', 'cop');
    e.innerHTML =
    '<strong>Intégration continue d\'un projet Django</strong> | '
    + 'Nicolas Perriault — <a href="http://www.akei.com/">Akei</a> | '
    + '<a href="http://rencontres.django-fr.org/">Rencontres Django Francophones</a>, Marseille, 2011 | '
    + 'Slides powered by <a href="https://github.com/n1k0/landslide">Landslide</a> (type <code>h</code> fort help)';
    body.appendChild(e);
}
r(go);