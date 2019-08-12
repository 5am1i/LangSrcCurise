(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('大通回族土族自治县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"630121","properties":{"name":"大通回族土族自治县","cp":[101.685643,36.926954],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@@AA@@AAA@@A@A@A@A@AA@@C@@@@A@@@@@@@@AA@@@@@A@@A@@A@@@@AB@@@@@@@@AB@@@@A@@@A@CBC@A@A@A@A@CA@@AAA@A@CBA@A@@@@B@@AAA@@@A@AA@@A@@AAA@@AB@A@@AA@@@@A@A@@BAB@@@@A@@@@@A@A@E@CAA@A@@@@@AB@D@B@D@@@B@B@@A@ABA@A@@B@@@D@@CB@B@@@B@B@BA@@@AB@@@@A@@@A@@@A@A@A@@BA@@B@@CDA@@BA@ABC@@@A@@BA@@@A@@B@@A@A@@@@@AA@@@@AB@@A@A@A@@@@@@@CB@@A@AAA@AAA@A@ADAB@BEBC@@BA@@@AA@@A@@AABA@A@A@@AAABA@@A@@@CBCBAB@@@B@@CD@@ABABA@@B@@@@@B@@@@@BA@@@@BAB@@BB@@AB@@@B@@A@@BA@@@@BBBA@AB@B@@@@@@A@AB@@AD@@@@@B@B@B@@BB@@@BBBB@BB@@@@B@@@BB@@@@@@@D@@@@BBA@@@BB@@@@@B@BA@@@@@@B@@AF@@AB@@@@ABA@@@BB@@@BA@AB@@A@@@@B@@@@AB@@BB@@@@@B@@@@@B@@@B@@ABBBA@BBA@@@A@@@@B@@@BBB@BDB@@@B@B@B@@@@A@@@@B@@@B@@ABA@@@EB@@@B@BABA@@@@DAB@B@@@BABA@A@@@AB@@A@@@CA@@A@AA@@C@@BABABABA@@BAB@D@BA@AB@@@B@BBBBB@@ADCBCBABCBA@@BCFAD@B@DBB@D@@AB@@ABCDC@EBA@@@C@A@E@@BA@@BAB@B@B@@AB@@BFAB@BABA@@B@@@B@@AB@@CD@@GBA@A@A@@@A@CDCBADGFCFAB@@A@A@C@A@A@A@@A@AAAA@AAEAA@CB@@A@C@C@AAABCBAB@@KAA@A@@FAFCBCBA@@AA@CAC@AAABABCDADBBAB@BC@@@@@CAA@C@@@A@@BAD@B@BEDCDC@@@A@CDAD@BB@@B@@CAA@C@A@A@CBABA@K@A@ABABCFABEBCB@B@BEDADABC@CBADADADAFCDA@ABEFAB@@@BA@A@IAABC@CDEBA@CDA@A@AB@@AD@BAD@B@@@@AB@@A@@B@@C@ABA@A@A@EBC@@@@@ADADAD@BCBAB@B@BEFABA@E@CBEBEDC@A@C@CBA@GB@@ABCD@@CB@@ADABEDA@@B@BABADCBA@@B@B@@AB@B@@BD@@@@EDC@AB@@@@A@@@CAC@ABABEDA@@BAB@@A@AB@BG@@DCFCDCDA@EBC@CBABABABABABCBGBEBABA@@BADADABAB@@BB@BBBABABCDGFEBAB@BB@@BBB@B@B@BCBCHADADCB@@E@C@G@G@GAKBEBEBEBEDCDEFABCBE@CBCDADADCFCDADAF@BAFABC@ABCBABAB@D@@@B@D@DAHAFAF@D@BAJ@DADEFCDCDEHCDADCDADAHAFAJABADABEBIDEBIBIDKFEBGBEDEBCBEBEBGDEBGBEAC@CAECCCCACCCAC@CAA@C@EBEDIDIFEBADABA@@DB@@B@BCBEBEBABEFKJGDI@I@G@KCEAGDCFEDE@EAGKAGEAIBGFADKBABCFADCBEBC@@BADABCBAF@HAD@DBFBDAFCBCDGDMH@B@NBJ@FEJCJCHCBG@EDAFADBD@HCD@DEDCDA@CBGDEDADEBC@A@ABA@EDCBAB@B@B@@DBBBB@BBBBBBBB@F@D@D@D@B@DBBDBBB@BBB@@@BAB@B@B@B@D@D@F@BBBB@BBDBABABABAB@DAFBDAH@D@D@F@DAD@BCBAD@@A@@BBB@BBBBBDDBBDBBBDDDBDBB@F@F@D@B@DA@AB@BCB@@ABAB@DBDBBBDBDBB@@D@DAD@BB@BDDBBBDDDB@DB@@BBBB@DBD@DBD@BBDBBB@B@BADBB@@@BBBFBBBBBBD@@BBB@B@DBD@B@@ADADCBABAD@DAH@F@B@B@@@@A@@A@EACCCCACAE@A@A@A@@BAB@DAHADAD@B@DA@ADEBABEBADCDEDADAFAD@FBF@B@BBBADAFCDCJCDC@@@A@A@@@A@A@A@@BABADAD@HCJCJCDALCFAFCHCD@B@DBDBFBDBB@D@B@D@BABADA@ABAD@BAB@@C@CAABGFEB@NAPBRBJ@FAHKJCH@NDF@DBFDHBBBB@BAHCFAHCBAB@BBF@B@B@BCBAB@B@DAFBFBB@D@D@D@F@H@F@F@D@DBHBF@B@B@DE@ADEBABADAF@HBHBBBF@DADAFAFCD@FAB@D@BBDFDDBBDBB@D@BBDB@BBD@BBBB@B@BAD@B@BBDBDBDBB@B@D@B@BABCBABAB@D@BAHAHAFCFEDAB@@ADBF@BABCBEDCBCDEDCBAFAF@D@D@D@D@HCDEBAD@D@F@F@DAH@H@H@H@J@HBF@DBBBBB@@D@HBHAF@D@BA@@@@@@F@F@FAF@DADAB@@@DAB@DBD@D@D@BA@@DCDCBAD@DAF@F@F@D@DBDBBBH@DBD@D@FAFABAB@DEDADCBAB@B@BBFBBBDB@@B@DBB@DAB@BAB@BCDADABADAFADAFADAD@BADBD@D@@@D@DADADABA@C@A@C@C@CACAG@CACAA@C@A@A@CDADCBCFEFCBE@AACAAAA@A@@@AB@BAB@F@D@HAD@DBF@DBDBBBDBBBDBBABA@ABC@CBA@ADADAHAFAHAD@DADCB@BAD@FAD@F@BBH@D@BAB@DABCDCDABCDCBCBABABABBB@DBBBDBFBFBB@F@DAHADADAH@F@FAD@D@D@FBD@FBD@BC@A@@BABABADAD@D@DAB@BAFCFAHAFADAFAJA@@BAF@B@D@DBDDDBDD@B@D@D@BB@FBDBF@B@D@BA@A@CBA@@DAHCDAB@@@@A@AAA@A@AB@DAJADAB@@C@CACAA@A@A@ABABAF@F@D@H@JAJ@F@JBF@F@D@BAFCDCDCBABCBCBA@C@A@C@@DA@@HAHCFAFABAB@BCDABCDAHCFCHCFADAFAJ@F@HAH@DAD@BADADADADADCDCDCBGBC@ABCBAFCFCHCFAFCHAHAAA@AAAAA@AACAA@E@C@C@A@A@AAA@@A@@@CBCBEBA@CBA@A@A@CACAA@AAACAA@AAAACAA@E@C@E@C@GBC@ABGBEBCBCBCDEBC@C@E@GAGACAEAEAE@A@AAEACAC@C@A@CAC@C@A@@AAA@@@A@@@C@A@CBA@C@@@CAACAAAACCCAAAAAEACAA@AAA@@A@A@@DCAC@CAAAACCCCA@@@AAECA@ACAAAEAA@AAA@CBC@G@@EECCEECG@AAEDEHCFC@@@@FEBGBAFCB@BCBG@GEGCACCAA@E@E@AECAAACBE@E@@E@G@GAKEGCCC@ADA@ACE@CAA@CAACACCC@AAAEDEFIBE@CACA@CG@E@E@E@ECG@@@I@G@@@C@@@E@ECCCEAC@EBE@E@ABADABEBE@E@CAEAEAA@@ECCE@CAAEAAACAAE@CBADCFCDADE@C@AAEAGAEBCBC@CECECAC@A@E@A@CACCE@A@C@EBG@EAEAECEA@GGCC@A@ABEBABAF@F@BC@@ACAACCA@A@@@A@ABC@AA@@A@@@A@@@C@AA@@@@A@@@@BAA@@@@A@@@@@@@@BAD@@@@A@AAB@A@@AA@A@A@A@@B@@@B@B@BBD@BBDBJ@D@B@BBB@@@B@BB@AB@@@B@@BB@B@D@H@@@B@B@B@BDB@B@@C@A@@@A@@BC@@@@B@@A@@@C@@@@@@B@@@@A@A@A@C@A@@@AA@@@@A@A@@@@@@@A@A@@@AA@@A@@@@@A@@AA@A@@@AA@@C@@BA@A@AB@@@@A@A@@@A@@@ABA@@@A@AB@@A@@@@@@@@@AB@@AA@@A@A@@A@@A@@@A@A@A@BB@@AD@@CDA@@@A@C@@@AAA@CAC@A@AAA@@@A@A@@AA@A@@BA@A@@B@@@BAB@B@BA@@B@@@BA@AD@B@@@@A@@@@BA@@B@@@@@BB@@B@@@@@B@@@BABA@@@A@"],"encodeOffsets":[[104138,37658]]}}],"UTF8Encoding":true});}));