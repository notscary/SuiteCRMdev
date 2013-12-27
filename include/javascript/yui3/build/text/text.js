/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.3.0
build: 3167
*/
YUI.add("text-accentfold",function(e){var c=e.Array,b=e.Text,a=b.Data.AccentFold,d={canFold:function(f){var g;for(g in a){if(a.hasOwnProperty(g)&&f.search(a[g])!==-1){return true;}}return false;},compare:function(g,f,h){var i=d.fold(g),j=d.fold(f);return h?!!h(i,j):i===j;},filter:function(g,f){return c.filter(g,function(h){return f(d.fold(h));});},fold:function(f){if(e.Lang.isArray(f)){return c.map(f,d.fold);}f=f.toLowerCase();e.Object.each(a,function(h,g){f=f.replace(h,g);});return f;}};b.AccentFold=d;},"3.3.0",{requires:["array-extras","text-data-accentfold"]});YUI.add("text-data-accentfold",function(a){a.namespace("Text.Data").AccentFold={0:/[⁰₀⓪０]/gi,1:/[¹₁①１]/gi,2:/[²₂②２]/gi,3:/[³₃③３]/gi,4:/[⁴₄④４]/gi,5:/[⁵₅⑤５]/gi,6:/[⁶₆⑥６]/gi,7:/[⁷₇⑦７]/gi,8:/[⁸₈⑧８]/gi,9:/[⁹₉⑨９]/gi,a:/[ªà-åāăąǎǟǡǻȁȃȧᵃḁẚạảấầẩẫậắằẳẵặⓐａ]/gi,b:/[ᵇḃḅḇⓑｂ]/gi,c:/[çćĉċčᶜḉⓒｃ]/gi,d:/[ďᵈḋḍḏḑḓⅾⓓｄ]/gi,e:/[è-ëēĕėęěȅȇȩᵉḕḗḙḛḝẹẻẽếềểễệₑℯⓔｅ]/gi,f:/[ᶠḟⓕｆ]/gi,g:/[ĝğġģǧǵᵍḡℊⓖｇ]/gi,h:/[ĥȟʰḣḥḧḩḫẖℎⓗｈ]/gi,i:/[ì-ïĩīĭįĳǐȉȋᵢḭḯỉịⁱℹⅰⓘｉ]/gi,j:/[ĵǰʲⓙⱼｊ]/gi,k:/[ķǩᵏḱḳḵⓚｋ]/gi,l:/[ĺļľŀǉˡḷḹḻḽℓⅼⓛｌ]/gi,m:/[ᵐḿṁṃⅿⓜｍ]/gi,n:/[ñńņňǹṅṇṉṋⁿⓝｎ]/gi,o:/[ºò-öōŏőơǒǫǭȍȏȫȭȯȱᵒṍṏṑṓọỏốồổỗộớờởỡợₒℴⓞｏ]/gi,p:/[ᵖṕṗⓟｐ]/gi,q:/[ʠⓠｑ]/gi,r:/[ŕŗřȑȓʳᵣṙṛṝṟⓡｒ]/gi,s:/[śŝşšſșˢṡṣṥṧṩẛⓢｓ]/gi,t:/[ţťțᵗṫṭṯṱẗⓣｔ]/gi,u:/[ù-üũūŭůűųưǔǖǘǚǜȕȗᵘᵤṳṵṷṹṻụủứừửữựⓤｕ]/gi,v:/[ᵛᵥṽṿⅴⓥｖ]/gi,w:/[ŵʷẁẃẅẇẉẘⓦｗ]/gi,x:/[ˣẋẍₓⅹⓧｘ]/gi,y:/[ýÿŷȳʸẏẙỳỵỷỹⓨｙ]/gi,z:/[źżžᶻẑẓẕⓩｚ]/gi};},"3.3.0");YUI.add("text-data-wordbreak",function(a){a.namespace("Text.Data").WordBreak={aletter:"[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-׳ؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆༀཀ-ཇཉ-ཬྈ-ྌႠ-Ⴥა-ჺჼᄀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᯀ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〻〼ㄅ-ㄭㄱ-ㆎㆠ-ㆺꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐꞑꞠ-ꞩꟺ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]",midnumlet:"['\\.‘’․﹒＇．]",midletter:"[:··״‧︓﹕：]",midnum:"[,;;։،؍٬߸⁄︐︔﹐﹔，；]",numeric:"[0-9٠-٩٫۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹]",cr:"\\r",lf:"\\n",newline:"[\u000B\u000C\u0085\u2028\u2029]",extend:"[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0900-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C01-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C82\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D02\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B6-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAA\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2\u1DC0-\u1DE6\u1DFC-\u1DFF\u200C\u200D\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA67C\uA67D\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE26\uFF9E\uFF9F]",format:"[\u00AD\u0600-\u0603\u06DD\u070F\u17B4\u17B5\u200E\u200F\u202A-\u202E\u2060-\u2064\u206A-\u206F\uFEFF\uFFF9-\uFFFB]",katakana:"[〱-〵゛゜゠-ヺー-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ﾝ]",extendnumlet:"[_‿⁀⁔︳︴﹍-﹏＿]",punctuation:"[!-#%-*,-\\/:;?@\\[-\\]_{}¡«·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰෴๏๚๛༄-༒༺-༽྅࿐-࿔࿙࿚၊-၏჻፡-፨᐀᙭᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰⸱、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･]"};},"3.3.0");YUI.add("text-wordbreak",function(d){var n=d.Text,k=n.Data.WordBreak,g=0,e=1,l=2,s=3,q=4,c=5,i=6,m=7,t=8,o=9,r=10,f=11,p=12,h=[new RegExp(k.aletter),new RegExp(k.midnumlet),new RegExp(k.midletter),new RegExp(k.midnum),new RegExp(k.numeric),new RegExp(k.cr),new RegExp(k.lf),new RegExp(k.newline),new RegExp(k.extend),new RegExp(k.format),new RegExp(k.katakana),new RegExp(k.extendnumlet)],b="",a=new RegExp("^"+k.punctuation+"$"),u=/\s/,j={getWords:function(A,E){var z=0,v=j._classify(A),B=v.length,w=[],C=[],y,D,x;if(!E){E={};}if(E.ignoreCase){A=A.toLowerCase();}D=E.includePunctuation;x=E.includeWhitespace;for(;z<B;++z){y=A.charAt(z);w.push(y);if(j._isWordBoundary(v,z)){w=w.join(b);if(w&&(x||!u.test(w))&&(D||!a.test(w))){C.push(w);}w=[];}}return C;},getUniqueWords:function(w,v){return d.Array.unique(j.getWords(w,v));},isWordBoundary:function(w,v){return j._isWordBoundary(j._classify(w),v);},_classify:function(A){var x,w=[],z=0,y,C,v=A.length,D=h.length,B;for(;z<v;++z){x=A.charAt(z);B=p;for(y=0;y<D;++y){C=h[y];
if(C&&C.test(x)){B=y;break;}}w.push(B);}return w;},_isWordBoundary:function(z,w){var v,x=z[w],A=z[w+1],y;if(w<0||(w>z.length-1&&w!==0)){return false;}if(x===g&&A===g){return false;}y=z[w+2];if(x===g&&(A===l||A===e)&&y===g){return false;}v=z[w-1];if((x===l||x===e)&&A===g&&v===g){return false;}if((x===q||x===g)&&(A===q||A===g)){return false;}if((x===s||x===e)&&A===q&&v===q){return false;}if(x===q&&(A===s||A===e)&&y===q){return false;}if(x===t||x===o||v===t||v===o||A===t||A===o){return false;}if(x===c&&A===i){return false;}if(x===m||x===c||x===i){return true;}if(A===m||A===c||A===i){return true;}if(x===r&&A===r){return false;}if(A===f&&(x===g||x===q||x===r||x===f)){return false;}if(x===f&&(A===g||A===q||A===r)){return false;}return true;}};n.WordBreak=j;},"3.3.0",{requires:["array-extras","text-data-wordbreak"]});YUI.add("text",function(a){},"3.3.0",{use:["text-accentfold","text-wordbreak"]});