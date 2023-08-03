// ** MUI Imports
import Grid from '@mui/material/Grid'
import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Link } from '@mui/material'
import dynamic from 'next/dynamic';

const Map = dynamic(() => import("../../../@core/components/map"), { ssr: false });

const DikeConstructions = () => {
    const [mapCenter, setMapCenter] = useState([ 20.246403, 105.967898 ]);
    const [mapZoom, setMapZoom] = useState(9);

    const [mapData, setMapData] = useState<any | null>(null);
    
    const zoomConstruction = (coords:any) => {
        setMapCenter(coords);
        setMapZoom(13);
    };

    React.useEffect(() => { 
        // async function!
        const getData = async () => {
        // 'await' the data
        // const response = await axios.get("url");
        const data = {
            "type":"FeatureCollection",
            "features":[{
            "geometry":{"type":"LineString","coordinates":[[105.8182493813822,20.39630146787161],[105.8186394564002,20.39624579535391],[105.8188103925359,20.39617317408383],[105.8193701686508,20.39581145148805],[105.8203284519298,20.39519662324536],[105.8206642816095,20.39489593446572],[105.8208021524324,20.39477251643349],[105.8233812836136,20.39283047053386],[105.8246513842197,20.39179226944619],[105.8251254755752,20.39143093425633],[105.8282157359781,20.38930951900176],[105.8287938513979,20.38906141530862],[105.8294892385458,20.3886233138792],[105.8304919519837,20.38816134280855],[105.8312940433756,20.38778957611835],[105.8326502072826,20.38708064115643],[105.833169064923,20.38682169471996],[105.833676286811,20.38657400426892],[105.834396473044,20.38635862826435],[105.8349279580318,20.38624460819048],[105.8357075033195,20.38606245794653],[105.8376928819365,20.38582989022802],[105.8403763121523,20.38566087822893],[105.8409432670255,20.38554666911147],[105.8413678461278,20.38533278006175],[105.8429237806377,20.3844220733914],[105.8439137838748,20.38381518705162],[105.8448923704725,20.38327520030875],[105.8464845918921,20.38252048059936],[105.8470503910354,20.38218321454714],[105.8476280824231,20.38186820228266],[105.8483242959603,20.381597148184],[105.8492925703265,20.38135828223903],[105.8514070769864,20.38095771753056],[105.8523755435916,20.38074114710838],[105.8535570304815,20.38056815590163],[105.8543367680946,20.38043054949521],[105.8546679479036,20.38045115029991],[105.8551650260105,20.38053796760591],[105.8559346940968,20.3807237206456],[105.8569178195879,20.38103109984918],[105.8580671739644,20.38144913197935],[105.8585408792896,20.38158068105732],[105.8591326184498,20.38166693062087],[105.8595345690894,20.38165383908716],[105.8599836618786,20.38160699912654],[105.8605625774768,20.38150377957749],[105.8620622291182,20.38112843182953],[105.864979778963,20.38055642914892],[105.8655347968431,20.3804198870607],[105.8662792772511,20.3803381405287],[105.8667744440687,20.38029412592318],[105.8668110880002,20.38029087239243],[105.866982639993,20.38023690170153],[105.8675739989376,20.37997288764235],[105.8679333001393,20.37965329459003],[105.8681643288303,20.37934183717725],[105.8683787732832,20.37894735190486],[105.8686481636865,20.37833307370233],[105.869130841732,20.37710479560062],[105.8694858072752,20.37601329069763],[105.8698961376721,20.37477787310345],[105.8702904593237,20.37353485576573],[105.8703853324759,20.3732922791349],[105.8705824083449,20.37266318214563],[105.8710008654548,20.37144280780066],[105.8712927160941,20.37054087059372],[105.8716729399689,20.36966116617993],[105.8720381423326,20.36896320399191],[105.8723645251122,20.36849995028291],[105.8726438134782,20.36821859940825],[105.8729955233716,20.36797464680968],[105.8734434600677,20.36773030235659],[105.8738759897699,20.36758432069543],[105.874292146328,20.36739307077743],[105.8750684912248,20.36703352325459],[105.8758928178257,20.36665105700518],[105.8768852273663,20.36619204021466],[105.8778136151787,20.36577119113089],[105.878989535723,20.36512957199117],[105.8795737638103,20.36486185135512],[105.8804781616621,20.36444860736357],[105.8814144151488,20.36399743711397],[105.8823986392147,20.36350816832729],[105.883398643097,20.36298855142578],[105.8846390919425,20.36240718498552],[105.8860474431384,20.36173407897386],[105.8872559344048,20.36119070784255],[105.8896169379199,20.36014198724717],[105.8913614341693,20.35932340055512],[105.8924021119866,20.35889431453217],[105.8930824177681,20.35859570572893],[105.8938585420204,20.35821340364433],[105.8949304583116,20.35765550342392],[105.895570447651,20.35732682900986],[105.8970428849222,20.35664581026073],[105.8977069598189,20.35631700452567],[105.8982587406447,20.35599636230182],[105.8995149442929,20.35539963566314],[105.9008908277933,20.35468123168507],[105.9013546639529,20.354414061331],[105.9016259910181,20.35416287968404],[105.9018085512416,20.353821457972],[105.9022683394606,20.35285808113065],[105.9025989626115,20.351759142947],[105.9030474720075,20.35024341338253],[105.9032692298254,20.34974279493966],[105.9035082103537,20.34944642883529],[105.9038978537306,20.34885424308575],[105.9041850180874,20.34855762676697],[105.9043766894951,20.34841281844414],[105.9048247293309,20.3481910703058],[105.90542541095,20.34801387895985],[105.9066835973201,20.34777283881794],[105.9083426765074,20.34747658762857],[105.9099217137887,20.34721867920655],[105.9110280845065,20.34707677546803],[105.911296641704,20.34703165176626],[105.9113474365701,20.34806890262814],[105.911674041466,20.35227525633677],[105.9132937245275,20.35520164632836],[105.9140471981768,20.35653983297825],[105.9146629260986,20.35733120821977],[105.9153334645385,20.35819916998491],[105.9168351068429,20.35980307329874],[105.918678608367,20.36173796283195],[105.9195394926083,20.36264338813873],[105.9199506293037,20.36272397013199]]},
            "type":"Feature","properties":{"id":"dam-cut-1","detailContent":"<div class='landslide-popup container'> <div class='popup-content tab-content'> <div id='thong-tin-sat-lo' class='tab-pane fade in active show'> <div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Tên công trình:</p><p class='p-0 my-2'>Đê Hữu Sông Đáy</p></div><div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Chiều dài (m):</p><p class='p-0 my-2'>8380</p></div><div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Cấp đê:</p><p class='p-0 my-2'>3</p></div><div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Loại đê:</p><p class='p-0 my-2'>Đê sông</p></div><div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Thuộc huyện:</p><p class='p-0 my-2'>Huyện Gia Viễn</p></div></div><div id='hinh-anh' class='tab-pane fade'> </div></div></div>"},"id":null
            },
            {
            "geometry":{"type":"LineString","coordinates":[[105.9340287399744,20.32819192509077],[105.9334113512532,20.32792240674857],[105.9312727109864,20.3271521312986],[105.9300059397732,20.3265826183527],[105.9288883902146,20.32610751778488],[105.9268888709229,20.32550691278431],[105.9256337547706,20.3251126485122],[105.9248678811659,20.32486619815126],[105.9243993555251,20.32462819990018],[105.9238348170657,20.32431545728282],[105.9229079805784,20.32378926294892],[105.9218646138813,20.32328364226088],[105.9212369714032,20.32307655609192],[105.9203754779932,20.32280547557091],[105.9199392086288,20.32263739635762],[105.9190985016972,20.32230106725212],[105.9176834373078,20.32177740961136],[105.9169707250988,20.32154067197712],[105.9164289626513,20.32148334773965],[105.9157385899533,20.32143185896176],[105.9146125760357,20.32131751367054],[105.9140604083104,20.32129031861661],[105.9137411760762,20.32117174867486],[105.9128741836952,20.32087500341443],[105.9120538262224,20.3203681579968],[105.9113400716854,20.3199509995657],[105.9108288547231,20.31967307652017],[105.9098169507083,20.31910714356036],[105.9089007260922,20.31854567577766],[105.9080902544694,20.31792854833196],[105.907610080349,20.31750013349716],[105.9070221942268,20.31681671251343],[105.9066264607248,20.31630772788019],[105.9050946888269,20.31396563326249],[105.9045157135595,20.31297654634832],[105.9035073550987,20.31117293754646],[105.9030778233327,20.3103333036949],[105.9019301861757,20.30829796546504],[105.9016832744302,20.30782858140751],[105.9013403638372,20.30726953496495],[105.9003570905764,20.30580300410857],[105.8979372449264,20.30356007796785],[105.8960549018258,20.3017744525002],[105.8953740308392,20.30118929899147],[105.8941041625684,20.30048926229886],[105.8913136671829,20.29887200113743],[105.8880993935773,20.29692223365226],[105.8865558941619,20.29608567254802],[105.8858417291262,20.29587049037838],[105.8853424618606,20.2958393202628],[105.8847721741654,20.29585909676003],[105.884380402492,20.29592837800654],[105.8839710701869,20.29604824580271],[105.8836154680077,20.29620144705064],[105.8833844440059,20.29632041335036],[105.8829937198698,20.29657487843702],[105.8825676652803,20.29687992923282],[105.8820351785053,20.29728651287858],[105.8809709885837,20.29822578296145],[105.8800482172499,20.2989541201103],[105.879072465102,20.29978362591405],[105.876783234282,20.30159572025012],[105.8756819168094,20.30229123381642],[105.8749880570421,20.30253030513984],[105.8735277453812,20.30278160261585],[105.8722280399637,20.30305729187577],[105.8696992839797,20.30350747370397],[105.8668498349704,20.30399281397978],[105.8641074349769,20.30450278407624],[105.8613294455509,20.30502137866685],[105.8591207447712,20.30533513980714],[105.8572861354619,20.30560494343349],[105.855558759249,20.30591630126559],[105.8539918766621,20.30626055512381],[105.8515696467595,20.30664256580613],[105.8507505803885,20.30681485005148],[105.8504482005466,20.30693412093311],[105.8501289825403,20.30723857596395],[105.8494561777954,20.30809174488717],[105.8485004202781,20.30934169390863],[105.8458802391119,20.31269481632362],[105.8449071245133,20.3140458288164],[105.8432077874729,20.31627535418632],[105.8416150018854,20.31844156622644],[105.8406950989243,20.31975779137009],[105.8392789320316,20.32163134189787],[105.837969209586,20.32340346375471],[105.8378648973947,20.32352573950395],[105.8368668211511,20.32469588200491],[105.8362612329145,20.32537044401253],[105.8356584805391,20.32592691844031],[105.8328880799531,20.32749711754519],[105.8306910354729,20.32872009082958],[105.8287529590168,20.33010631584862],[105.8260542026304,20.33170425608794],[105.8243831447288,20.33251561431073],[105.8229336975466,20.33315951050163],[105.8214004982448,20.33362202778179],[105.8208112935953,20.33388813214631],[105.8196755303744,20.33438987171187],[105.8183258137633,20.33503434695064],[105.8173082547284,20.33554563595124],[105.8161832095227,20.33604721295427],[105.8151655298977,20.33653816423274],[105.8138582154863,20.33708113869147],[105.8129907341675,20.33755114229111],[105.812477149027,20.33791822727243],[105.8120923681247,20.33826438612022],[105.8118470043813,20.33857963311925],[105.8116237590716,20.33901619199592],[105.8114862704896,20.33943211656027],[105.8113395449906,20.34012162884246],[105.8112038522911,20.34088200547362],[105.8112668552895,20.3414657512128],[105.810957700573,20.34356068997329],[105.810956636542,20.34455279178594],[105.8107276819939,20.3463197902468],[105.8103697692174,20.34686926315929],[105.8099295043621,20.34759401242735],[105.8094765337255,20.34801871524482],[105.8088941093888,20.34858503475724],[105.8081745959979,20.34899506885783],[105.8073151339413,20.34958010018841],[105.8066075451423,20.34989973446151],[105.8060845758892,20.35023504596785],[105.8056368411803,20.35085032924789],[105.8054530216744,20.35123348944379],[105.805437470607,20.35163195381291],[105.8053786923013,20.35218003732313],[105.8052601882748,20.35309363456848],[105.8052269271675,20.35345902630068],[105.8052369008747,20.35369142115318],[105.8053353020522,20.35398971667002],[105.8054956317072,20.35436252671476],[105.8057090277075,20.35477655709347],[105.8059752396244,20.35519865454294],[105.8067304845992,20.35658131972554],[105.8072635620138,20.35753346187003],[105.807734816607,20.35846095470764],[105.8081968325112,20.3592971567109],[105.808658982884,20.36015819968534],[105.8090313573946,20.36067944314215],[105.8094575821206,20.36139132087605],[105.8097242484942,20.36189634011385],[105.8100186901626,20.36266700521835],[105.8101796391208,20.36313935991284],[105.8102888186344,20.36381946169613],[105.810352130969,20.36414284980259],[105.8105393047006,20.36459855037325],[105.8107874523771,20.36492939105755],[105.8113628114346,20.36554092739922],[105.8124325284696,20.36644077947249],[105.8135116793828,20.36746497622895],[105.8146229274258,20.36800850738183],[105.8149683869691,20.36842199845846],[105.8152697104844,20.36881067128444],[105.8156605400393,20.36949776374311],[105.8159360030165,20.36998619904651],[105.8160877802973,20.37039219153184],[105.8161521121101,20.37090654682339],[105.8161642867721,20.37155394296477],[105.8161533906337,20.37283227773284],[105.8160969504314,20.37380367591983],[105.8160575694692,20.37468366245054],[105.8159559935339,20.37545607612076],[105.8158956757393,20.37570542017157],[105.8155935072675,20.3768273859687],[105.8151867522278,20.37816565748991],[105.8149009293866,20.3790467948447],[105.8145522789267,20.37977582484213],[105.8142566981504,20.38021416972534],[105.8140554691234,20.38051900596606],[105.8139704549838,20.3810921457502],[105.8139106544976,20.38144103920396],[105.8137977684493,20.38173209293946],[105.8135970359575,20.38205680073223],[105.8133168345717,20.38234032335179],[105.8127999170299,20.38280752184168],[105.8122300061669,20.3832501226712],[105.8118536164098,20.38365026561976],[105.8115826574416,20.38402507431822],[105.8113473278858,20.38447433610947],[105.8110350822989,20.38535568073258],[105.8108965859946,20.38581280275227],[105.8107760924907,20.38632801866548],[105.810665634978,20.38710047053022],[105.8105974015618,20.38751580053981],[105.8104852862273,20.38795626774161],[105.8103381891888,20.38844667365902],[105.810104194458,20.38915330064384],[105.8098093448742,20.39000962898868],[105.8096854253165,20.39192771876238],[105.8082099700798,20.3941113481734],[105.8115700895427,20.39453098864614],[105.813320717206,20.39499602112919],[105.8139133653179,20.39546003136728],[105.8142859056212,20.39569172490067],[105.8146105615095,20.39587865308407],[105.8148157877507,20.39600010186783],[105.8152493704539,20.39607314569566],[105.8161832108733,20.39623030052011],[105.8167263152525,20.39631755294019],[105.8171930079804,20.39636026393604],[105.8177736795492,20.39634850740813],[105.8182493813822,20.39630146787161]]},
            "type":"Feature","properties":{"id":"ta-hoang-long-2","detailContent":"<div class='landslide-popup container'> <div class='popup-content tab-content'> <div id='thong-tin-sat-lo' class='tab-pane fade in active show'> <div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Tên công trình:</p><p class='p-0 my-2'>Đê Hữu Sông Đáy</p></div><div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Chiều dài (m):</p><p class='p-0 my-2'>8380</p></div><div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Cấp đê:</p><p class='p-0 my-2'>3</p></div><div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Loại đê:</p><p class='p-0 my-2'>Đê sông</p></div><div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Thuộc huyện:</p><p class='p-0 my-2'>Huyện Gia Viễn</p></div></div><div id='hinh-anh' class='tab-pane fade'> </div></div></div>"},"id":null
            },
            {
            "geometry":{"type":"LineString","coordinates":[[105.9199506293037,20.36272397013199],[105.9208505326971,20.36166762114508],[105.9215044661878,20.36192515217684],[105.9216074557766,20.36193337114856],[105.9220740918163,20.36170145310538],[105.9226818961609,20.36160113043156],[105.9234089034539,20.36147235166413],[105.924111739759,20.36160991867244],[105.9251708932255,20.36186908450567],[105.926447592641,20.36262610641422],[105.9270393621248,20.36297608898548],[105.9280094646127,20.36383861319477],[105.9296628772137,20.36484492228186],[105.9302172146992,20.36519500247912],[105.9305738337823,20.36535200281558],[105.9309489652384,20.36547358227459],[105.9314269571734,20.36556814361707],[105.9324761368328,20.36571259017401],[105.9337126065744,20.36586488154064],[105.9345925597404,20.36587778784293],[105.93491973057,20.36581424600685],[105.9351063806421,20.36571613504736],[105.9352740157403,20.3655828947566],[105.9353759979295,20.36542344736068],[105.9355604130542,20.36495460915804],[105.935651210424,20.36448627258524],[105.9357401458047,20.36370908728208],[105.9357338679157,20.3626674568621],[105.935452130753,20.36168195577321],[105.9353535064667,20.36074597090929],[105.9352683904892,20.3599801065393],[105.9352940961873,20.35959161431831],[105.9353657437608,20.35905273750678],[105.9353740026453,20.35850896074987],[105.935511724013,20.35806684110175],[105.9356065466699,20.35753280846565],[105.9358746577834,20.35671726338488],[105.9361525954597,20.35624801358548],[105.9363659470146,20.35592906752044],[105.9366265432375,20.35568936352217],[105.9374678392017,20.35507923645754],[105.9380698820043,20.35467211117557],[105.9385836348241,20.35449283416305],[105.9394902852768,20.35429373658104],[105.9402004982267,20.35411339789635],[105.940869104397,20.35396363342106],[105.9414529201572,20.35391423510196],[105.9418457360056,20.35386794275982],[105.942710040694,20.3537739370886],[105.9439047068549,20.35375655348807],[105.9449665203419,20.353911789816],[105.9460618038915,20.35395879660968],[105.9471247859176,20.35408492521637],[105.9481081016011,20.35426965608629],[105.9492130295336,20.35447241986789],[105.9501678875991,20.35451140136759],[105.9505417096673,20.35442110898751],[105.9510739802601,20.35422398912889],[105.9515685059442,20.35396528370756],[105.9520646628227,20.35370232226203],[105.9522562173747,20.35353216937354],[105.9524785826547,20.35316907178591],[105.9526079579233,20.3528947391944],[105.9526714417145,20.3525677388751],[105.9527117567278,20.35218557944212],[105.9524097337478,20.35125523273198],[105.9522867174244,20.35051767962847],[105.9519755317146,20.34957356037568],[105.9515858331882,20.34863022941834],[105.9510412976161,20.34715584305992],[105.950530307014,20.34584306340082],[105.9499471227054,20.34455569736186],[105.949539024119,20.34377705249696],[105.9492736694047,20.34323114927328],[105.9487229673634,20.34200774010671],[105.9482995232277,20.34135293524625],[105.9479407559848,20.34079832223686],[105.9475128619428,20.34000848702282],[105.9472315713393,20.33950250458153],[105.9469056618652,20.33893316684573],[105.9465397587881,20.33838536431545],[105.9461243785153,20.33787125310607],[105.9457131151004,20.3374231541458],[105.9453640020654,20.33702422206953],[105.9449285508487,20.33662458169981],[105.9442012146114,20.33609137460924],[105.9436953232245,20.33573285305693],[105.9429905575182,20.33526004390431],[105.9424742235725,20.33498920097498],[105.9419581047954,20.33475358638228],[105.9416106002459,20.33455247363665],[105.940480498666,20.33381933761329],[105.9390136186869,20.3330103143444],[105.938277557333,20.33251732760717],[105.9377686480013,20.33226982733095],[105.9372943225158,20.33203307075141],[105.9366887017009,20.33172745753768],[105.9355164514794,20.33093967941315],[105.9345672771931,20.33049470118207],[105.9339655796453,20.33020920212161],[105.9332375076238,20.33000296824561],[105.9331271386866,20.32993300473987],[105.9340287399744,20.32819192509077]]},
            "type":"Feature","properties":{"id":"hau-song-day-3","detailContent":"<div class='landslide-popup container'> <div class='popup-content tab-content'> <div id='thong-tin-sat-lo' class='tab-pane fade in active show'> <div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Tên công trình:</p><p class='p-0 my-2'>Đê Hữu Sông Đáy</p></div><div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Chiều dài (m):</p><p class='p-0 my-2'>8380</p></div><div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Cấp đê:</p><p class='p-0 my-2'>3</p></div><div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Loại đê:</p><p class='p-0 my-2'>Đê sông</p></div><div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Thuộc huyện:</p><p class='p-0 my-2'>Huyện Gia Viễn</p></div></div><div id='hinh-anh' class='tab-pane fade'> </div></div></div>"},"id":null
            }
            ]};
    
            // save data to state
            setMapData(data);
        };
        getData();
    }, []);

    return (
        <React.Fragment>
            <Grid container spacing={4}>
                <Grid item xs={12} sx={{ height: '50vh', width: '100%' }}>
                    <Map center={mapCenter} zoom={mapZoom} mapData={mapData} />
                </Grid>
                <Grid item xs={12}>
                    <Table className='mainTable'>
                        <TableHead className='tableHead'>
                            <TableRow>
                                <TableCell size='small'>STT</TableCell>
                                <TableCell size='small'>Tên tuyến đê</TableCell>
                                <TableCell size='small'>Chiều dài (km)</TableCell>
                                <TableCell size='small'>Cấp đê</TableCell>
                                <TableCell size='small'>Loại đê</TableCell>
                                <TableCell size='small'>Thuộc huyện</TableCell>
                                <TableCell size='small'>Diện tích bảo vệ</TableCell>
                                <TableCell size='small'>Số dân bảo vệ</TableCell>
                                <TableCell size='small'>Địa danh đầu</TableCell>
                                <TableCell size='small'>Địa danh cuối</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow >
                                <TableCell size='small'>1</TableCell>
                                <TableCell size='small'><Link href='#' onClick={() => zoomConstruction([20.363713, 105.918076])}>Đầm Cút</Link></TableCell>
                                <TableCell size='small'>8380</TableCell>
                                <TableCell size='small'>3</TableCell>
                                <TableCell size='small'>Đê sông</TableCell>
                                <TableCell size='small'>Huyện Gia Viễn</TableCell>
                                <TableCell size='small'>0.0</TableCell>
                                <TableCell size='small'>0.0</TableCell>
                                <TableCell size='small'>Xã Gia Thanh</TableCell>
                                <TableCell size='small'>Xã Gia Trấn</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell size='small'>2</TableCell>
                                <TableCell size='small'><Link href='#' onClick={() => zoomConstruction([20.33791822727243, 105.812477149027])}>Tả Hoàng Long</Link></TableCell>
                                <TableCell size='small'>10050</TableCell>
                                <TableCell size='small'>4</TableCell>
                                <TableCell size='small'>Đê sông</TableCell>
                                <TableCell size='small'>Huyện Nho Quan</TableCell>
                                <TableCell size='small'>0.0</TableCell>
                                <TableCell size='small'>0.0</TableCell>
                                <TableCell size='small'>-</TableCell>
                                <TableCell size='small'>-</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell size='small'>3</TableCell>
                                <TableCell size='small'><Link href='#' onClick={() => zoomConstruction([20.36147235166413, 105.9234089034539])}>Hữu sông Đáy</Link></TableCell>
                                <TableCell size='small'>7122</TableCell>
                                <TableCell size='small'>3</TableCell>
                                <TableCell size='small'>Đê sông</TableCell>
                                <TableCell size='small'>TP. Ninh Bình</TableCell>
                                <TableCell size='small'>0.0</TableCell>
                                <TableCell size='small'>0.0</TableCell>
                                <TableCell size='small'>Xã Ninh Khánh</TableCell>
                                <TableCell size='small'>Xã Ninh Phúc</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell size='small'>4</TableCell>
                                <TableCell size='small'><Link href='#'>Hữu sông Đáy</Link></TableCell>
                                <TableCell size='small'>13765</TableCell>
                                <TableCell size='small'>3</TableCell>
                                <TableCell size='small'>Đê sông</TableCell>
                                <TableCell size='small'>Huyện Kim Sơn</TableCell>
                                <TableCell size='small'>0.0</TableCell>
                                <TableCell size='small'>0.0</TableCell>
                                <TableCell size='small'>Xã Xuân Thiện</TableCell>
                                <TableCell size='small'>Xã Kim Tân</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default DikeConstructions
