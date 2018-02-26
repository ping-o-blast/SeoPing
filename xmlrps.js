// JavaScript Document
var title;
var url;

function pingfarm(title,url)
{
var makeuri="http://xmlrpc.sportsontheweb.net/ping.php?title="+title+"&url="+url+"&md=json";
var xhr = new XMLHttpRequest();
xhr.open('GET',makeuri, true);
xhr.onload = function () 
{
console.log(xhr.responseText);//You can process responce here
};
xhr.send();
}
