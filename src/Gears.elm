module Gears exposing (viewPlanetary, beginInitialRotate)

import Svg exposing (..)
import Svg.Attributes exposing (..)
import Color exposing (black, rgb)
import Style
import Animation exposing (turn, px)


viewPlanetary gears =
    svg
        [ version "1.1"
        , width "250"
        , height "250"
        , class "anim-rotate-105"
        ]
        [ Svg.g [ transform "translate(120,120)scale(0.5)" ]
            [ Svg.g (Animation.render gears.global)
                [ Svg.g [ class "gear annulus" ]
                    [ Svg.path
                        (Animation.render gears.annulus
                            ++ [ Style.gears
                               , class "anim-rotate-185-rev"
                               , radius "185"
                               , direction "-1"
                               , d "M16.28273749929777,-191.3083178001651A192,192 0 0,1 32.44815750179502,-189.23825478676002L31.26515175954208,-182.33894341432605L35.034839581251575,-174.51807933711615A178,178 0 0,1 39.95947073748795,-173.4567401353428L46.61594135624819,-179.03059518269728L48.37978778594407,-185.80472581123178A192,192 0 0,1 63.96284059047504,-181.03246952852817L61.63086202728064,-174.4323274103006L64.02459387672735,-166.08687900890945A178,178 0 0,1 68.69902150116853,-164.2085395001794L76.20173092513866,-168.5772707218051L79.08503966284661,-174.95587015452205A192,192 0 0,1 93.63742921221784,-167.6187097269481L90.2235646055224,-161.5076109348198L91.17247717565438,-152.87766156523583A178,178 0 0,1 95.46222649625412,-150.23635815733115L103.59533543545518,-153.27428511011078L107.51515893841835,-159.07385265481767A192,192 0 0,1 120.61823948076334,-149.38286482914037L116.22069949969384,-143.9366145489113L115.6974943035491,-135.27043214198815A178,178 0 0,1 119.47915704268068,-131.94215032494523L128.00869076084604,-133.56187738158704L132.85226284368883,-138.6155700392687A192,192 0 0,1 144.12908260852308,-126.84954689089565L138.874376471754,-122.22482382716508L136.89410517022839,-113.77171867227133A178,178 0 0,1 140.05888977614302,-109.85220705417903L148.73946911788397,-110.00713761629306L154.36744903045258,-114.16956985042307A192,192 0 0,1 163.49359444479578,-100.6669984429885L157.5328904806626,-96.99684745808788L154.15252187363006,-89.00000000000001A178,178 0 0,1 156.60938325532442,-84.60201579387403L165.19128375767016,-83.28769279126959L171.44176476471713,-86.4391190049933A192,192 0 0,1 178.1546932409298,-71.58844373381925L171.65947004985424,-68.97844838935708L166.97625118751753,-61.667913369620784A178,178 0 0,1 168.6545099162365,-56.917978573681644L176.89084592676141,-54.17221268616181L183.5840130699362,-56.22197208509766A192,192 0 0,1 187.69060587795573,-40.45041983917945L180.84771920532194,-38.97566494920937L174.99637776763535,-32.561753150084826A178,178 0 0,1 175.8477533953517,-27.596514740227214L183.50158052289223,-23.498296653172567L190.44488356970436,-24.387421391400714A192,192 0 0,1 191.82700151129882,-8.148711013660488L184.83330874786606,-7.851622591287449L177.9821771744813,-2.518850577455667A178,178 0 0,1 177.9821771744813,2.5188505774556416L184.83330874786608,7.851622591287423L191.82700151129885,8.14871101366046A192,192 0 0,1 190.44488356970436,24.387421391400693L183.50158052289223,23.498296653172545L175.8477533953517,27.596514740227196A178,178 0 0,1 174.99637776763535,32.56175315008481L180.84771920532197,38.975664949209346L187.69060587795576,40.45041983917943A192,192 0 0,1 183.5840130699362,56.22197208509763L176.89084592676141,54.17221268616178L168.6545099162365,56.91797857368162A178,178 0 0,1 166.97625118751753,61.66791336962075L171.65947004985424,68.97844838935706L178.1546932409298,71.58844373381922A192,192 0 0,1 171.44176476471716,86.43911900499326L165.19128375767016,83.28769279126955L156.60938325532445,84.602015793874A178,178 0 0,1 154.1525218736301,88.99999999999999L157.53289048066262,96.99684745808784L163.4935944447958,100.66699844298846A192,192 0 0,1 154.36744903045258,114.16956985042304L148.739469117884,110.00713761629304L140.05888977614302,109.85220705417903A178,178 0 0,1 136.89410517022839,113.77171867227132L138.87437647175403,122.22482382716505L144.1290826085231,126.84954689089562A192,192 0 0,1 132.85226284368886,138.61557003926868L128.00869076084604,133.561877381587L119.4791570426807,131.94215032494523A178,178 0 0,1 115.69749430354912,135.27043214198815L116.22069949969384,143.93661454891128L120.61823948076334,149.38286482914037A192,192 0 0,1 107.51515893841832,159.07385265481767L103.59533543545515,153.27428511011078L95.46222649625408,150.23635815733115A178,178 0 0,1 91.17247717565434,152.87766156523583L90.22356460552237,161.50761093481984L93.63742921221781,167.61870972694814A192,192 0 0,1 79.08503966284661,174.95587015452205L76.20173092513866,168.5772707218051L68.69902150116853,164.2085395001794A178,178 0 0,1 64.02459387672735,166.08687900890945L61.63086202728064,174.4323274103006L63.96284059047504,181.03246952852817A192,192 0 0,1 48.37978778594407,185.80472581123178L46.61594135624819,179.03059518269728L39.95947073748795,173.4567401353428A178,178 0 0,1 35.034839581251575,174.51807933711615L31.26515175954208,182.33894341432605L32.44815750179502,189.23825478676002A192,192 0 0,1 16.282737499297813,191.3083178001651L15.689096027969248,184.3335353803674L10.070358754715071,177.71490616870418A178,178 0 0,1 5.037196738795043,177.92871226706126L1.132760877285699e-14,185L1.1756220996694822e-14,192A192,192 0 0,1 -16.282737499297703,191.3083178001651L-15.689096027969141,184.3335353803674L-20.10845911437492,176.86053791630712A178,178 0 0,1 -25.105357082635607,176.22066009907397L-31.265151759542057,182.33894341432605L-32.448157501795,189.23825478676002A192,192 0 0,1 -48.37978778594396,185.8047258112318L-46.615941356248086,179.0305951826973L-49.7087932261237,170.91821399722872A178,178 0 0,1 -54.52567549000741,169.44306038418455L-61.63086202728062,174.4323274103006L-63.962840590475025,181.03246952852817A192,192 0 0,1 -79.08503966284651,174.9558701545221L-76.20173092513856,168.57727072180515L-77.8790958613289,160.05888425145898A178,178 0 0,1 -82.37738948817918,157.79089232624557L-90.22356460552236,161.50761093481984L-93.6374292122178,167.61870972694814A192,192 0 0,1 -107.51515893841837,159.07385265481764L-103.5953354354552,153.27428511011075L-103.80895870271672,144.59495182425164A178,178 0 0,1 -107.85925597491165,141.59936758523494L-116.22069949969391,143.93661454891125L-120.6182394807634,149.38286482914032A192,192 0 0,1 -132.85226284368883,138.6155700392687L-128.00869076084604,133.56187738158704L-126.75242680672253,124.97128589642682A178,178 0 0,1 -130.23820804609875,121.33428684811683L-138.87437647175403,122.22482382716505L-144.1290826085231,126.84954689089562A192,192 0 0,1 -154.3674490304526,114.169569850423L-148.73946911788403,110.007137616293L-146.0494583690616,101.75242360800915A178,178 0 0,1 -148.87044399590818,97.57863959115828L-157.53289048066264,96.9968474580878L-163.4935944447958,100.66699844298842A192,192 0 0,1 -171.44176476471722,86.43911900499316L-165.19128375767022,83.28769279126945L-161.14491292570227,75.6063293525604A178,178 0 0,1 -163.21994831969045,71.01583253414398L-171.65947004985426,68.97844838935696L-178.15469324092984,71.5884437338191A192,192 0 0,1 -183.5840130699362,56.22197208509765L-176.89084592676141,54.1722126861618L-171.60452173327482,47.285178657735955A178,178 0 0,1 -172.87391190412697,42.41002927332333L-180.84771920532197,38.97566494920932L-187.69060587795576,40.450419839179396A192,192 0 0,1 -190.44488356970436,24.387421391400625L-183.50158052289223,23.498296653172478L-177.12738089014738,17.603719464836367A178,178 0 0,1 -177.55460779382096,12.584166686054942L-184.83330874786608,7.851622591287313L-191.82700151129885,8.148711013660346A192,192 0 0,1 -191.82700151129885,-8.148711013660469L-184.83330874786608,-7.8516225912874305L-177.55460779382094,-12.584166686055056A178,178 0 0,1 -177.12738089014735,-17.60371946483648L-183.50158052289223,-23.498296653172595L-190.44488356970436,-24.38742139140075A192,192 0 0,1 -187.69060587795573,-40.45041983917952L-180.84771920532194,-38.97566494920943L-172.87391190412697,-42.410029273323445A178,178 0 0,1 -171.6045217332748,-47.28517865773606L-176.8908459267614,-54.17221268616191L-183.58401306993613,-56.22197208509777A192,192 0 0,1 -178.1546932409298,-71.58844373381922L-171.65947004985424,-68.97844838935707L-163.2199483196904,-71.0158325341441A178,178 0 0,1 -161.14491292570222,-75.60632935256051L-165.19128375767016,-83.28769279126956L-171.44176476471716,-86.43911900499327A192,192 0 0,1 -163.49359444479575,-100.66699844298853L-157.53289048066256,-96.9968474580879L-148.87044399590812,-97.57863959115838A178,178 0 0,1 -146.04945836906154,-101.75242360800925L-148.73946911788397,-110.00713761629308L-154.36744903045255,-114.16956985042309A192,192 0 0,1 -144.1290826085231,-126.8495468908956L-138.87437647175403,-122.22482382716504L-130.23820804609878,-121.33428684811682A178,178 0 0,1 -126.75242680672254,-124.97128589642678L-128.00869076084606,-133.561877381587L-132.8522628436889,-138.61557003926868A192,192 0 0,1 -120.61823948076332,-149.38286482914037L-116.22069949969382,-143.9366145489113L-107.85925597491155,-141.599367585235A178,178 0 0,1 -103.80895870271662,-144.5949518242517L-103.59533543545511,-153.27428511011084L-107.51515893841828,-159.07385265481773A192,192 0 0,1 -93.63742921221775,-167.61870972694817L-90.22356460552231,-161.50761093481984L-82.37738948817915,-157.7908923262456A178,178 0 0,1 -77.87909586132888,-160.05888425145898L-76.20173092513853,-168.57727072180518L-79.08503966284648,-174.95587015452213A192,192 0 0,1 -63.96284059047507,-181.03246952852817L-61.63086202728066,-174.4323274103006L-54.525675490007444,-169.44306038418452A178,178 0 0,1 -49.70879322612374,-170.91821399722872L-46.615941356248136,-179.03059518269728L-48.37978778594402,-185.80472581123178A192,192 0 0,1 -32.44815750179496,-189.23825478676005L-31.265151759542018,-182.33894341432608L-25.10535708263557,-176.22066009907397A178,178 0 0,1 -20.108459114374885,-176.86053791630712L-15.689096027969105,-184.3335353803674L-16.282737499297667,-191.3083178001651A192,192 0 0,1 -3.5268662990084465e-14,-192L-3.398282631857097e-14,-185L5.037196738794999,-177.92871226706126A178,178 0 0,1 10.070358754715029,-177.7149061687042L15.689096027969201,-184.3335353803674L16.282737499297767,-191.3083178001651M0,-205A205,205 0 0,0 0,205A205,205 0 0,0 0,-205Z"
                               ]
                        )
                        []
                    ]
                , Svg.g [ class "gear sun", transform "translate(22,-60)rotate(3,22,-60)" ]
                    [ Svg.path
                        (Animation.render gears.sun
                            ++ [ Style.gears
                               , class "anim-rotate-55"
                               , radius "55"
                               , direction "1"
                               , d "M2.9390552491737054e-15,-48A48,48 0 0,1 13.52316272838863,-46.05566273349587L15.495290626278639,-52.77211354879736L23.043072250940316,-57.5588118469965A62,62 0 0,1 28.410044347099458,-55.10779781660525L29.735244960057877,-46.26894430571495L25.950759237868695,-40.38016957589669A48,48 0 0,1 36.2759795690044,-31.433315229373683L41.5662265894842,-36.01734036699068L50.50370902712081,-35.963528393414286A62,62 0 0,1 53.693575034635195,-31L50.029759744498506,-22.847825715103756L43.66233577701688,-19.93992062409055A48,48 0 0,1 47.51142921028477,-6.831112237117686L54.440179303451295,-7.827316105030682L61.929775029346494,-2.950078781072021A62,62 0 0,1 61.929775029346494,2.9500787810720235L54.440179303451295,7.827316105030684L47.51142921028477,6.831112237117688A48,48 0 0,1 43.662335777016885,19.939920624090544L50.02975974449851,22.84782571510375L53.6935750346352,30.999999999999996A62,62 0 0,1 50.50370902712081,35.963528393414286L41.56622658948421,36.01734036699067L36.275979569004406,31.43331522937368A48,48 0 0,1 25.95075923786868,40.3801695758967L29.735244960057866,46.26894430571497L28.410044347099436,55.10779781660526A62,62 0 0,1 23.04307225094029,57.558811846996505L15.495290626278617,52.772113548797364L13.52316272838861,46.05566273349588A48,48 0 0,1 -7.719085787227797e-15,48L-8.844785797865184e-15,55L-5.89347468485934,61.719259199531244A62,62 0 0,1 -11.733577150345454,60.87957923028781L-15.495290626278656,52.77211354879735L-13.523162728388645,46.055662733495865A48,48 0 0,1 -25.950759237868667,40.38016957589671L-29.735244960057848,46.26894430571498L-38.3258571456775,48.735291874052834A62,62 0 0,1 -42.78489871189093,44.87151036251436L-41.5662265894842,36.01734036699069L-36.27597956900439,31.43331522937369A48,48 0 0,1 -43.66233577701688,19.93992062409056L-50.0297597444985,22.84782571510377L-58.590050760309445,20.278213725680153A62,62 0 0,1 -60.25231723605958,14.617054001584497L-54.440179303451295,7.827316105030684L-47.51142921028477,6.831112237117688A48,48 0 0,1 -47.511429210284774,-6.831112237117676L-54.4401793034513,-7.827316105030671L-60.25231723605959,-14.617054001584481A62,62 0 0,1 -58.590050760309445,-20.27821372568014L-50.029759744498506,-22.847825715103756L-43.66233577701688,-19.93992062409055A48,48 0 0,1 -36.27597956900441,-31.43331522937366L-41.56622658948422,-36.01734036699066L-42.78489871189097,-44.87151036251433A62,62 0 0,1 -38.32585714567754,-48.73529187405281L-29.7352449600579,-46.26894430571494L-25.950759237868716,-40.38016957589667A48,48 0 0,1 -13.523162728388627,-46.05566273349587L-15.495290626278635,-52.77211354879736L-11.733577150345456,-60.87957923028781A62,62 0 0,1 -5.8934746848593695,-61.719259199531244L-5.89528155025415e-14,-55L-5.144972989312713e-14,-48M0,-35A35,35 0 0,0 0,35A35,35 0 0,0 0,-35Z"
                               ]
                        )
                        []
                    ]
                , Svg.g [ class "gear planet", transform "translate(0,90)" ]
                    [ Svg.path
                        (Animation.render gears.largePlanet
                            ++ [ Style.gears
                               , class "anim-rotate-95-rev"
                               , radius "95"
                               , direction "-1"
                               , d "M5.38826795681846e-15,-88A88,88 0 0,1 14.48432394470459,-86.79979469943956L15.636486076669728,-93.70432382325862L22.30547130305034,-99.53123102799843A102,102 0 0,1 27.75455341422418,-98.15133603154354L30.84644957444494,-89.85263796156029L28.573553290012153,-83.23191726965585A88,88 0 0,1 41.883370587262476,-77.39369010617102L45.21500233852199,-83.55000636461645L53.41463722676355,-86.89577970150935A102,102 0 0,1 58.12042186604717,-83.82133715297499L58.35020770551845,-74.96834839265739L54.05071871669078,-69.44436482688263A88,88 0 0,1 64.74370413923559,-59.60077830306522L69.89377151394751,-64.3417493044454L78.73549839346472,-64.84382231741674A102,102 0 0,1 82.18804077741977,-60.40799577182796L79.53081543494022,-51.960075021630544L73.67065008710252,-48.13143791477356A88,88 0 0,1 80.58805274564506,-35.349197369461315L86.99846603223045,-38.1610653420321L95.52414660209959,-35.76503062966095A102,102 0 0,1 97.34931019170975,-30.44851072217285L92.09302526423639,-23.321121278375923L85.30722340266107,-21.602722868390327A88,88 0 0,1 87.69943538458695,-7.266982401565248L94.67552683563363,-7.845037819871575L101.96127131654504,-2.8105429215525275A102,102 0 0,1 101.96127131654504,2.81054292155252L94.67552683563363,7.845037819871567L87.69943538458695,7.266982401565241A88,88 0 0,1 85.30722340266107,21.602722868390327L92.09302526423639,23.32112127837592L97.34931019170975,30.44851072217284A102,102 0 0,1 95.52414660209959,35.76503062966094L86.99846603223045,38.161065342032096L80.58805274564506,35.34919736946131A88,88 0 0,1 73.67065008710252,48.13143791477355L79.53081543494022,51.96007502163054L82.18804077741979,60.40799577182795A102,102 0 0,1 78.73549839346474,64.84382231741672L69.89377151394751,64.3417493044454L64.74370413923559,59.600778303065205A88,88 0 0,1 54.05071871669078,69.44436482688263L58.35020770551845,74.96834839265739L58.12042186604717,83.82133715297499A102,102 0 0,1 53.41463722676355,86.89577970150935L45.21500233852199,83.55000636461645L41.883370587262476,77.39369010617102A88,88 0 0,1 28.573553290012153,83.23191726965585L30.84644957444494,89.85263796156029L27.75455341422418,98.15133603154354A102,102 0 0,1 22.30547130305034,99.53123102799843L15.636486076669728,93.70432382325862L14.48432394470459,86.79979469943956A88,88 0 0,1 5.38826795681846e-15,88L5.816880180656292e-15,95L-5.61895155629827,101.84511467619825A102,102 0 0,1 -11.220838541396082,101.38092908643085L-15.636486076669714,93.70432382325863L-14.484323944704578,86.79979469943957A88,88 0 0,1 -28.573553290012143,83.23191726965585L-30.84644957444493,89.85263796156029L-38.383555938679216,94.50239485590978A102,102 0 0,1 -43.53119642063317,92.2444303911529L-45.21500233852199,83.55000636461646L-41.883370587262476,77.39369010617104A88,88 0 0,1 -54.05071871669077,69.44436482688263L-58.35020770551844,74.96834839265739L-66.98870645286891,76.91887419724341A102,102 0 0,1 -71.12427371158753,73.11181634318203L-69.8937715139475,64.3417493044454L-64.74370413923558,59.60077830306522A88,88 0 0,1 -73.67065008710249,48.1314379147736L-79.5308154349402,51.96007502163059L-88.33459118601273,51.000000000000036A102,102 0 0,1 -91.00993233907617,46.056402547710746L-86.99846603223044,38.16106534203213L-80.58805274564504,35.34919736946134A88,88 0 0,1 -85.30722340266107,21.60272286839036L-92.09302526423639,23.321121278375955L-100.10805231174662,19.554484456221356A102,102 0 0,1 -101.03325263302533,14.010062897477669L-94.67552683563363,7.845037819871604L-87.69943538458695,7.266982401565275A88,88 0 0,1 -87.69943538458695,-7.266982401565215L-94.67552683563363,-7.845037819871539L-101.03325263302534,-14.010062897477601A102,102 0 0,1 -100.10805231174663,-19.554484456221285L-92.0930252642364,-23.32112127837589L-85.30722340266108,-21.6027228683903A88,88 0 0,1 -80.58805274564506,-35.34919736946129L-86.99846603223047,-38.161065342032074L-91.0099323390762,-46.05640254771069A102,102 0 0,1 -88.33459118601276,-50.99999999999997L-79.53081543494024,-51.96007502163052L-73.67065008710253,-48.13143791477354A88,88 0 0,1 -64.7437041392356,-59.6007783030652L-69.89377151394753,-64.34174930444539L-71.12427371158755,-73.11181634318201A102,102 0 0,1 -66.98870645286893,-76.91887419724341L-58.350207705518464,-74.96834839265738L-54.05071871669079,-69.44436482688262A88,88 0 0,1 -41.88337058726252,-77.39369010617101L-45.21500233852204,-83.55000636461644L-43.53119642063328,-92.24443039115285A102,102 0 0,1 -38.383555938679365,-94.50239485590973L-30.846449574445113,-89.85263796156023L-28.573553290012313,-83.2319172696558A88,88 0 0,1 -14.484323944704638,-86.79979469943956L-15.636486076669781,-93.70432382325862L-11.220838541396198,-101.38092908643084A102,102 0 0,1 -5.61895155629843,-101.84511467619825L-1.8620454028499267e-13,-95L-1.7248420573767742e-13,-88M0,-75A75,75 0 0,0 0,75A75,75 0 0,0 0,-75Z"
                               ]
                        )
                        []
                    ]
                , Svg.g [ class "gear planet", transform "translate(-83.56238925925012,-99.58577760546713)rotate(2,-83.56238925925012,-99.58577760546713)" ]
                    [ Svg.path
                        (Animation.render gears.mediumPlanet
                            ++ [ Style.gears
                               , class "anim-rotate-55-rev"
                               , radius "55"
                               , direction "-1"
                               , d "M2.9390552491737054e-15,-48A48,48 0 0,1 13.52316272838863,-46.05566273349587L15.495290626278639,-52.77211354879736L23.043072250940316,-57.5588118469965A62,62 0 0,1 28.410044347099458,-55.10779781660525L29.735244960057877,-46.26894430571495L25.950759237868695,-40.38016957589669A48,48 0 0,1 36.2759795690044,-31.433315229373683L41.5662265894842,-36.01734036699068L50.50370902712081,-35.963528393414286A62,62 0 0,1 53.693575034635195,-31L50.029759744498506,-22.847825715103756L43.66233577701688,-19.93992062409055A48,48 0 0,1 47.51142921028477,-6.831112237117686L54.440179303451295,-7.827316105030682L61.929775029346494,-2.950078781072021A62,62 0 0,1 61.929775029346494,2.9500787810720235L54.440179303451295,7.827316105030684L47.51142921028477,6.831112237117688A48,48 0 0,1 43.662335777016885,19.939920624090544L50.02975974449851,22.84782571510375L53.6935750346352,30.999999999999996A62,62 0 0,1 50.50370902712081,35.963528393414286L41.56622658948421,36.01734036699067L36.275979569004406,31.43331522937368A48,48 0 0,1 25.95075923786868,40.3801695758967L29.735244960057866,46.26894430571497L28.410044347099436,55.10779781660526A62,62 0 0,1 23.04307225094029,57.558811846996505L15.495290626278617,52.772113548797364L13.52316272838861,46.05566273349588A48,48 0 0,1 -7.719085787227797e-15,48L-8.844785797865184e-15,55L-5.89347468485934,61.719259199531244A62,62 0 0,1 -11.733577150345454,60.87957923028781L-15.495290626278656,52.77211354879735L-13.523162728388645,46.055662733495865A48,48 0 0,1 -25.950759237868667,40.38016957589671L-29.735244960057848,46.26894430571498L-38.3258571456775,48.735291874052834A62,62 0 0,1 -42.78489871189093,44.87151036251436L-41.5662265894842,36.01734036699069L-36.27597956900439,31.43331522937369A48,48 0 0,1 -43.66233577701688,19.93992062409056L-50.0297597444985,22.84782571510377L-58.590050760309445,20.278213725680153A62,62 0 0,1 -60.25231723605958,14.617054001584497L-54.440179303451295,7.827316105030684L-47.51142921028477,6.831112237117688A48,48 0 0,1 -47.511429210284774,-6.831112237117676L-54.4401793034513,-7.827316105030671L-60.25231723605959,-14.617054001584481A62,62 0 0,1 -58.590050760309445,-20.27821372568014L-50.029759744498506,-22.847825715103756L-43.66233577701688,-19.93992062409055A48,48 0 0,1 -36.27597956900441,-31.43331522937366L-41.56622658948422,-36.01734036699066L-42.78489871189097,-44.87151036251433A62,62 0 0,1 -38.32585714567754,-48.73529187405281L-29.7352449600579,-46.26894430571494L-25.950759237868716,-40.38016957589667A48,48 0 0,1 -13.523162728388627,-46.05566273349587L-15.495290626278635,-52.77211354879736L-11.733577150345456,-60.87957923028781A62,62 0 0,1 -5.8934746848593695,-61.719259199531244L-5.89528155025415e-14,-55L-5.144972989312713e-14,-48M0,-35A35,35 0 0,0 0,35A35,35 0 0,0 0,-35Z"
                               ]
                        )
                        []
                    ]
                , Svg.g [ class "gear planet", transform "translate(86.03646545265687,-122.87280664334881)rotate(-2,86.03646545265687,-122.87280664334881)" ]
                    [ Svg.path
                        (Animation.render gears.smallPlanet
                            ++ [ Style.gears
                               , class "anim-rotate-35-rev"
                               , radius "35"
                               , direction "-1"
                               , d "M1.7144488953513282e-15,-28A28,28 0 0,1 12.14874469529163,-25.227128301267737L15.185930869114536,-31.53391037658467L23.659442438672126,-34.70202852127178A42,42 0 0,1 28.567254986378618,-30.7881786168527L27.364101886381047,-21.82214306505567L21.891281509104836,-17.457714452044534A28,28 0 0,1 27.297981541091062,-6.230586150776803L34.122476926363824,-7.788232688471004L41.88255948160957,-3.138663930629818A42,42 0 0,1 41.88255948160957,3.138663930629819L34.122476926363824,7.7882326884710045L27.297981541091062,6.230586150776804A28,28 0 0,1 21.891281509104836,17.457714452044538L27.364101886381043,21.822143065055673L28.567254986378614,30.788178616852708A42,42 0 0,1 23.659442438672123,34.702028521271785L15.185930869114536,31.53391037658467L12.14874469529163,25.227128301267737A28,28 0 0,1 1.7144488953513282e-15,28L2.1430611191891602e-15,35L-6.259775179399321,41.530894701455395A42,42 0 0,1 -12.379717325257968,40.134057843017914L-15.185930869114532,31.53391037658467L-12.148744695291626,25.227128301267737A28,28 0 0,1 -21.891281509104836,17.45771445204454L-27.364101886381043,21.822143065055677L-36.373066958946424,20.999999999999996A42,42 0 0,1 -39.096697443056584,15.344323023388583L-34.12247692636383,7.788232688470993L-27.297981541091065,6.230586150776794A28,28 0 0,1 -27.297981541091062,-6.2305861507768L-34.122476926363824,-7.788232688471L-39.09669744305658,-15.344323023388592A42,42 0 0,1 -36.373066958946424,-21.000000000000004L-27.364101886381036,-21.822143065055684L-21.89128150910483,-17.45771445204455A28,28 0 0,1 -12.148744695291633,-25.227128301267733L-15.18593086911454,-31.533910376584664L-12.379717325257996,-40.13405784301791A42,42 0 0,1 -6.259775179399359,-41.530894701455395L-3.7515428047071864e-14,-35L-3.001234243765749e-14,-28M0,-15A15,15 0 0,0 0,15A15,15 0 0,0 0,-15Z"
                               ]
                        )
                        []
                    ]
                ]
            ]
        ]


factor =
    0.3


beginInitialRotate gears =
    let
        annulus =
            Animation.interrupt
                [ Animation.loop
                    [ Animation.toWith (Animation.speed { perSecond = 1 * factor })
                        [ Animation.rotate (turn 1) ]
                    ]
                ]
                gears.annulus

        sun =
            Animation.interrupt
                [ Animation.loop
                    [ Animation.toWith (Animation.speed { perSecond = 3.3636 * factor })
                        [ Animation.rotate (turn -1) ]
                    ]
                ]
                gears.sun

        smallPlanet =
            Animation.interrupt
                [ Animation.loop
                    [ Animation.toWith (Animation.speed { perSecond = 5.28571428571429 * factor })
                        [ Animation.rotate (turn 1) ]
                    ]
                ]
                gears.smallPlanet

        mediumPlanet =
            Animation.interrupt
                [ Animation.loop
                    [ Animation.toWith (Animation.speed { perSecond = 3.3636 * factor })
                        [ Animation.rotate (turn 1) ]
                    ]
                ]
                gears.mediumPlanet

        largePlanet =
            Animation.interrupt
                [ Animation.loop
                    [ Animation.toWith (Animation.speed { perSecond = 1.94736842105263 * factor })
                        [ Animation.rotate (turn 1) ]
                    ]
                ]
                gears.largePlanet

        global =
            Animation.interrupt
                [ Animation.loop
                    [ Animation.toWith (Animation.speed { perSecond = 1 * factor })
                        [ Animation.rotate (turn -1) ]
                    ]
                ]
                gears.global
    in
        { annulus = annulus
        , sun = sun
        , smallPlanet = smallPlanet
        , mediumPlanet = mediumPlanet
        , largePlanet = largePlanet
        , global = global
        }
