  var search = document.getElementById('search');
  var searchAnser = document.getElementById('searchAnser');
  var btn = document.getElementById('save');
  var txtTitle = document.getElementById('txtTitle');
  var count = document.getElementById('count');
  var newDate = new Date();
  var year = newDate.getFullYear();
  var month = newDate.getMonth()+1;
  var day = newDate.getDate();
  month += "";
  if(month.length == 1){
    month = '0' + month;
  }
  day += "";
  if(day.length == 1){
    day = '0' + day;
  }
  var today = '' + year + month + day;
  var before = document.getElementById('before');
  var after = document.getElementById('after');
  var tag = document.getElementsByClassName('tag');
  var backUp;

// for (const link of links) {
//     console.log(link.getAttribute('href'));
// }

count.innerHTML = '文字数:' + 0;


  window.onload = function (){
    var beforeScr = document.getElementById('before').scrollTop;
    var afterScr = document.getElementById('after').scrollTop;

    before.addEventListener('scroll', function(){
      setTimeout( scr(), 500);
      }, false);

    before.addEventListener('onkeydown', scr(), false);

    function scr(){
      var beforeScr = document.getElementById('before').scrollTop;
      var afterScr = document.getElementById('after').scrollTop;
      var beforeHeight = before.scrollHeight - beforeScr;
      var afterHeight = after.scrollHeight - afterScr;
      var scrPercent = beforeScr / beforeHeight;
      after.scrollTo(0, afterHeight * scrPercent);
            console.log(beforeScr);
    }
  }



function checkStart() {
  var td = document.getElementsByTagName('td');
  for(var i = 0; i < td.length; i++){
    var tdinner = td[i].innerHTML;
    var num = tdinner.replace(/,/g, "");
    for(var j =0; j< num.length; j++) {
      if(num.length > 3 && !isNaN(num)){
         while(num !=(num = num.replace(/^(\d+)(\d{3})/, "$1,$2")));
         td[i].innerHTML = num;
         td[i].classList.add('right');
      }
    }
  }
}

function whiteNow() {

  after.innerHTML = before.value;

  if(window.event.shiftKey){
    if(window.event.keyCode==13){
     brOn();
   }
  }

  if(window.event.keyCode==13){
    var dif = after.innerHTML.length - backUp;
    if(20 < dif || dif < -20){
      saveOn();
    }
    backUp = after.innerHTML.length;
    checkStart();

  }
 }

var textOnly =after.innerHTML.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'');
textOnly =textOnly.replace(/\r?\n/g, '');
count.innerHTML = '文字数:' + textOnly.length;



if(search.value != ''){
  var searchValue = search.value;
var reg = new RegExp(searchValue,'g');
var matchCount = textOnly.match(reg);
// search.value = search.value + before.value.match(/search.value/g).length;
searchAnser.innerHTML = matchCount.length;
}


btn.addEventListener('click',saveOn,false);
function saveOn() {
  var content = before.value;
  var blob = new Blob([ content ], { "type" : "text/plain" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.target = '_blank';
  if(txtTitle.value == ''){
    a.download =  today +'.txt';
  }else{
    a.download = txtTitle.value + '.txt';
  }
  a.click();
}


var h2 = new Array('<h2>', '</h2>');
tag[0].addEventListener('click',h2On,false);
function h2On() {
  var start = before.selectionStart;
  var end = before.selectionEnd;
  var selected = end - start;
  // alert(before.selectionStart + '' + before.selectionEnd);
  var target = selected ? before.value.substr(start, selected) : '';
  before.value = before.value.substr(0, start) + h2[0] + target + h2[1] + before.value.substr(end, before.value.length);
}
var h3 = new Array('<h3>', '</h3>');
tag[1].addEventListener('click',h3On,false);
function h3On() {
  var start = before.selectionStart;
  var end = before.selectionEnd;
  var selected = end - start;
  // alert(before.selectionStart + '' + before.selectionEnd);
  var target = selected ? before.value.substr(start, selected) : '';
  before.value = before.value.substr(0, start) + h3[0] + target + h3[1] + before.value.substr(end, before.value.length);
}

var red = new Array('<span class="red">', '</span>');
tag[2].addEventListener('click',redOn,false);
function redOn() {
  var start = before.selectionStart;
  var end = before.selectionEnd;
  var selected = end - start;
  // alert(before.selectionStart + '' + before.selectionEnd);
  var target = selected ? before.value.substr(start, selected) : '';
  before.value = before.value.substr(0, start) + red[0] + target +red[1] + before.value.substr(end, before.value.length);
}

var br = '<br>';
tag[3].addEventListener('click',brOn,false);
function brOn() {
  var start = before.selectionStart;
  var end = before.selectionEnd;
  var selected = end - start;
  // alert(before.selectionStart + '' + before.selectionEnd);
  var target = selected ? before.value.substr(start, selected) : '';
  before.value = before.value.substr(0, start) + target + br + before.value.substr(end, before.value.length);
}


var list = '<ul>\n<li>サンプル</li>\n<li>サンプル</li>\n</ul>';
tag[4].addEventListener('click',listOn,false);
function listOn() {
  var start = before.selectionStart;
  var end = before.selectionEnd;
  var selected = end - start;
  var target = selected ? before.value.substr(start, selected) : '';
  before.value = before.value.substr(0, start) + target + list + before.value.substr(end, before.value.length);
}

var strong = new Array('<strong>', '</strong>');
tag[5].addEventListener('click',stOn,false);
function stOn() {
  var start = before.selectionStart;
  var end = before.selectionEnd;
  var selected = end - start;
  var target = selected ? before.value.substr(start, selected) : '';
  before.value = before.value.substr(0, start) + strong[0] + target +strong[1] + before.value.substr(end, before.value.length);
}

var mark = new Array('<span class="mark">', '</span>');
tag[6].addEventListener('click',markOn,false);
function markOn() {
  var start = before.selectionStart;
  var end = before.selectionEnd;
  var selected = end - start;
  var target = selected ? before.value.substr(start, selected) : '';
  before.value = before.value.substr(0, start) + mark[0] + target + mark[1] + before.value.substr(end, before.value.length);
}

var quote = new Array('<blockquote cite="引用元アドレス">', '</blockquote>');
tag[7].addEventListener('click',quoOn,false);
function quoOn() {
  var start = before.selectionStart;
  var end = before.selectionEnd;
  var selected = end - start;
  var target = selected ? before.value.substr(start, selected) : '';
  before.value = before.value.substr(0, start) + quote[0] + target +quote[1] + before.value.substr(end, before.value.length);
}

var aLink = new Array('<a href="','" target="_blank">リンクの名前</a>');
tag[8].addEventListener('click',aLinkOn,false);
function aLinkOn() {
  var start = before.selectionStart;
  var end = before.selectionEnd;
  var selected = end - start;
  var target = selected ? before.value.substr(start, selected) : '';
  before.value = before.value.substr(0, start) + aLink[0] + target +aLink[1] + before.value.substr(end, before.value.length);
}
var table = '<table>\n<tr>\n<td>サンプル</td>\n<td>サンプル</td>\n</tr>\n<tr>\n<td>サンプル</td>\n<td>サンプル</td>\n</tr>\n</table>';
tag[9].addEventListener('click',tableOn,false);
function tableOn() {
  var start = before.selectionStart;
  var end = before.selectionEnd;
  var selected = end - start;
  // alert(before.selectionStart + '' + before.selectionEnd);
  var target = selected ? before.value.substr(start, selected) : '';
  before.value = before.value.substr(0, start) + target + table + before.value.substr(end, before.value.length);
}
var center = new Array('<td class="tableCenter">', '</td>');//enjinの構造上cssで指定したいから変えた！
tag[10].addEventListener('click',centerOn,false);
function centerOn() {
  var start = before.selectionStart;
  var end = before.selectionEnd;
  var selected = end - start;
  var target = selected ? before.value.substr(start, selected) : '';
  before.value = before.value.substr(0, start) + center[0] + target +center[1] + before.value.substr(end, before.value.length);
}

// window.onbeforeunload = function(){
//   return "本当に離れますか？";
// }
