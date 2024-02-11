const informationAbotFilesImg = 
[
    [8, ['1.Choistudio', '2.Package', '3.Cheelee', '4.Teenage Engineering', '5. Shoes and kicks', '6.Ormi', '7. Interior and exterior', '8. Manki Panki']], 
    [28, '1.Choistudio/01 Элджей.mp4', '1.Choistudio/02 cherep.mp4', '1.Choistudio/03 crocoboy.png', '1.Choistudio/04 cvetok.jpg', '1.Choistudio/05 clo 1.jpeg', '1.Choistudio/06 clo 2.jpg', '1.Choistudio/28 Zbrush.jpeg', '1.Choistudio/07 clo 3.jpg', '1.Choistudio/08 clo 5.jpeg', '1.Choistudio/09 cyberpunk.mp4', '1.Choistudio/10 50-50 1.jpg', '1.Choistudio/11 50-50 2.jpg', '1.Choistudio/12 50-50 3.png', '1.Choistudio/13 50-50 5 pre.jpg', '1.Choistudio/14 Glass 1.jpg', '1.Choistudio/15 Glass 2.jpg', '1.Choistudio/16 Glass 3.png', '1.Choistudio/17 Moveli.mp4', '1.Choistudio/18 Stop.jpg', '1.Choistudio/19 Atomic.jpg', '1.Choistudio/20 Atomic.jpg', '1.Choistudio/21 skeleton.png', '1.Choistudio/22 skillbox.mp4', '1.Choistudio/23 Peble.png', '1.Choistudio/24 Pisca.mp4', '1.Choistudio/25 Hudini voda.mp4', '1.Choistudio/26 Telega online.mp4', '1.Choistudio/27 Test FUD.mp4'], 
    [26, '2.Package/01. Baum.JPG', '2.Package/02. joj1.png', '2.Package/03.joj2.png', '2.Package/04.Squira.png', '2.Package/05.Squira.png', '2.Package/06. Plantario.png', '2.Package/07. Hagi.png', '2.Package/08.Altai 1.png', '2.Package/09.Altai 2.png', '2.Package/10.w gin 1.png', '2.Package/11.w gin 2.png', '2.Package/12.whealer 0.jpeg', '2.Package/13.whealer 1.jpg', '2.Package/14.whealer 2.jpg', '2.Package/15.whealer 3.jfif', '2.Package/16.whealer 4.jpg', '2.Package/17.whealer 5.png', '2.Package/18.korob.gif', '2.Package/19.ne.png', '2.Package/20.ne.png', '2.Package/21.ne.png', '2.Package/22.ne.png', '2.Package/23.ne.png', '2.Package/24.ne.png', '2.Package/25.ne.jpg', '2.Package/26.kom.gif'], 
    [20, '3.Cheelee/01.mp4', '3.Cheelee/02.mp4', '3.Cheelee/03.mp4', '3.Cheelee/04.mp4', '3.Cheelee/05.gif', '3.Cheelee/06.png', '3.Cheelee/07.png', '3.Cheelee/08.png', '3.Cheelee/09.mp4', '3.Cheelee/10.mp4', '3.Cheelee/11.gif', '3.Cheelee/12.mp4', '3.Cheelee/13.jpeg', '3.Cheelee/14.jpeg', '3.Cheelee/15 2.mp4', '3.Cheelee/16.mp4', '3.Cheelee/17.png', '3.Cheelee/18.png', '3.Cheelee/19.jpeg', '3.Cheelee/20.gif'], 
    [10, '4.Teenage Engineering/01 computer0.png', '4.Teenage Engineering/02 computer0.png', '4.Teenage Engineering/03 computer0.png', '4.Teenage Engineering/04 computer0.png', '4.Teenage Engineering/05 ruhrgerat 3.jpg', '4.Teenage Engineering/06 ruhrgerat 2.jpg', '4.Teenage Engineering/07 Screen.mp4', '4.Teenage Engineering/08 ruhrgerat 2.mp4', '4.Teenage Engineering/09 ruhrgerat 0.jpg', '4.Teenage Engineering/10 ruhrgerat 4.jpg'], 
    [21, '5. Shoes and kicks/01.png', '5. Shoes and kicks/02.png', '5. Shoes and kicks/03.jpg', '5. Shoes and kicks/04.png', '5. Shoes and kicks/05.jpg', '5. Shoes and kicks/06.jpg', '5. Shoes and kicks/07.jpg', '5. Shoes and kicks/08.jpg', '5. Shoes and kicks/09.jpg', '5. Shoes and kicks/10.jpg', '5. Shoes and kicks/11.jpg', '5. Shoes and kicks/12.jpg', '5. Shoes and kicks/13.jpg', '5. Shoes and kicks/14.jpg', '5. Shoes and kicks/15.jpg', '5. Shoes and kicks/16.jpg', '5. Shoes and kicks/17.png', '5. Shoes and kicks/18.jpg', '5. Shoes and kicks/19.png', '5. Shoes and kicks/20.png', '5. Shoes and kicks/21.jpg'], 
    [8, '6.Ormi/01.MP4', '6.Ormi/02.mp4', '6.Ormi/03.mp4', '6.Ormi/04.mp4', '6.Ormi/05.mp4', '6.Ormi/06.MOV', '6.Ormi/07.MP4', '6.Ormi/08.mp4'], 
    [28, '7. Interior and exterior/01.jpg', '7. Interior and exterior/02.jpg', '7. Interior and exterior/03.jpg', '7. Interior and exterior/04.jpg', '7. Interior and exterior/05.png', '7. Interior and exterior/06.png', '7. Interior and exterior/07.png', '7. Interior and exterior/08.png', '7. Interior and exterior/09.png', '7. Interior and exterior/10.jpg', '7. Interior and exterior/11.jpg', '7. Interior and exterior/12.jpg', '7. Interior and exterior/13.jpg', '7. Interior and exterior/14.jpg', '7. Interior and exterior/15.jpg', '7. Interior and exterior/16.jpg', '7. Interior and exterior/17.jpg', '7. Interior and exterior/18.jpg', '7. Interior and exterior/19.jpg', '7. Interior and exterior/20.jpg', '7. Interior and exterior/21.jpg', '7. Interior and exterior/22.png', '7. Interior and exterior/23.jpg', '7. Interior and exterior/24.png', '7. Interior and exterior/25.jpg', '7. Interior and exterior/26.png', '7. Interior and exterior/27.png', '7. Interior and exterior/28.png'], 
    [14, '8. Manki Panki/01.jpg', '8. Manki Panki/02.png', '8. Manki Panki/03.jpg', '8. Manki Panki/04.png', '8. Manki Panki/05.jpg', '8. Manki Panki/06.png', '8. Manki Panki/07.jpg', '8. Manki Panki/08.png', '8. Manki Panki/09.jpg', '8. Manki Panki/10.png', '8. Manki Panki/11.png', '8. Manki Panki/12.png', '8. Manki Panki/13.png', '8. Manki Panki/14.png']]
/*
[
    [8, ['1.Choistudio', '2.Package', '3.Cheelee', '4.Teenage Engineering', '5.Shoes and kicks', '6.Ormi', '7.Interior and exterior', '8.New Project']], 
    [27, ['1.Choistudio/01.mp4', [1280, 720, 1.78]], ['1.Choistudio/02.mp4', [720, 720, 1.0]], ['1.Choistudio/03.jpg', [2500, 2500, 1.0]], ['1.Choistudio/04.jpg', [1280, 1280, 1.0]], ['1.Choistudio/05.jpeg', [1444, 1170, 1.23]], ['1.Choistudio/06.jpg', [935, 1500, 0.62]], ['1.Choistudio/07.jpg', [935, 750, 1.25]], ['1.Choistudio/08.jpg', [1347, 1535, 0.88]], ['1.Choistudio/09.jpeg', [1435, 1170, 1.23]], ['1.Choistudio/10.mp4', [1280, 720, 1.78]], ['1.Choistudio/11.jpg', [1280, 1280, 1.0]], ['1.Choistudio/12.jpg', [1280, 1280, 1.0]], ['1.Choistudio/13.jpg', [1280, 1280, 1.0]], ['1.Choistudio/14.jpg', [707, 707, 1.0]], ['1.Choistudio/15.jpg', [1080, 1080, 1.0]], ['1.Choistudio/16.jpg', [1280, 1280, 1.0]], ['1.Choistudio/17.jpg', [1280, 1280, 1.0]], ['1.Choistudio/18.png', [1280, 2276, 0.56]], ['1.Choistudio/19.jpg', [1280, 1280, 1.0]], ['1.Choistudio/20.jpg', [1280, 1280, 1.0]], ['1.Choistudio/21.jpg', [1280, 1280, 1.0]], ['1.Choistudio/22.mp4', [1080, 1080, 1.0]], ['1.Choistudio/23.png', [1080, 1920, 0.56]], ['1.Choistudio/24.mp4', [1920, 1080, 1.78]], ['1.Choistudio/25.mp4', [1080, 1080, 1.0]], ['1.Choistudio/26.mp4', [1920, 1080, 1.78]], ['1.Choistudio/27.jpeg', [1080, 1080, 1.0]]],
    [28, ['2.Package/IMG_7014.JPG', [1555, 1170, 1.33]], ['2.Package/IMG_7015.JPG', [768, 750, 1.02]], ['2.Package/IMG_7016.JPG', [499, 749, 0.67]], ['2.Package/Screenshot_1.png', [924, 1393, 0.66]], ['2.Package/Screenshot_2.png', [925, 1395, 0.66]], ['2.Package/Screenshot_3.png', [923, 1472, 0.63]], ['2.Package/Screenshot_4.png', [924, 741, 1.25]], ['2.Package/Screenshot_5.png', [923, 742, 1.24]], ['2.Package/Screenshot_6.png', [924, 1603, 0.58]], ['2.Package/Screenshot_7.png', [871, 1550, 0.56]], ['2.Package/Screenshot_8.png', [867, 1550, 0.56]], ['2.Package/w gin 1.png', [1080, 1080, 1.0]], ['2.Package/w gin 2.png', [1080, 1080, 1.0]], ['2.Package/whealer 0.jpeg', [1600, 1279, 1.25]], ['2.Package/whealer 1.jpg', [1974, 1920, 1.03]], ['2.Package/whealer 2.jpg', [1596, 1920, 0.83]], ['2.Package/whealer 3.jfif', [1116, 1452, 0.77]], ['2.Package/whealer 4.jpg', [1421, 1920, 0.74]], ['2.Package/whealer 5.png', [875, 876, 1.0]], ['2.Package/Безимени-1233.gif', [1080, 1080, 1.0]], ['2.Package/Коробка-гиф-3.gif', [1080, 1080, 1.0]], ['2.Package/игра 0.png', [1838, 2198, 0.84]], ['2.Package/игра 1.png', [1080, 1080, 1.0]], ['2.Package/игра 2.png', [2025, 1620, 1.25]], ['2.Package/игра 3.png', [2025, 1620, 1.25]], ['2.Package/игра 4.png', [2025, 1620, 1.25]], ['2.Package/игра 5.png', [2025, 1620, 1.25]], ['2.Package/коробка.jpg', [1920, 2560, 0.75]]], 
    [20, ['3.Cheelee/0000-0090 (1).mp4', [540, 540, 1.0]], ['3.Cheelee/0000-0180_1.mp4', [1080, 1080, 1.0]], ['3.Cheelee/11.mp4', [1080, 1080, 1.0]], ['3.Cheelee/2ен.mp4', [2160, 1260, 1.71]], ['3.Cheelee/315304751_1529617190831156_3140040162152409558_n.mp4', [608, 1080, 0.56]], ['3.Cheelee/b6cdde154806245.6360f045d79e1.gif', [1400, 1400, 1.0]], ['3.Cheelee/b8f518154806245.636a4c80bcd9f.gif', [1400, 1400, 1.0]], ['3.Cheelee/cheel 1.mp4', [1920, 1080, 1.78]], ['3.Cheelee/cheelee promo.mp4', [1080, 1920, 0.56]], ['3.Cheelee/cheelee.mp4', [1280, 720, 1.78]], ['3.Cheelee/image_2023-05-29_15-17-43.png', [1440, 2400, 0.6]], ['3.Cheelee/image_2023-07-12_15-47-06.png', [1080, 1920, 0.56]], ['3.Cheelee/tg_image_1073546176.jpeg', [1260, 2160, 0.58]], ['3.Cheelee/tg_image_1676326434.jpeg', [1080, 1920, 0.56]], ['3.Cheelee/tg_image_1778933326.jpeg', [1260, 2160, 0.58]], ['3.Cheelee/untitled11.png', [2000, 2000, 1.0]], ['3.Cheelee/v1.png', [1350, 2400, 0.56]], ['3.Cheelee/Баннер_анонса_тест_3_вариант_без_размытия.png', [1440, 2560, 0.56]], ['3.Cheelee/Композиция_2 (1).gif', [1080, 1080, 1.0]], ['3.Cheelee/ен (2).mp4', [1350, 1080, 1.25]]], 
    [10, ['4.Teenage Engineering/1 computer–0 .png', [1080, 1080, 1.0]], ['4.Teenage Engineering/2 computer–0.png', [1080, 1080, 1.0]], ['4.Teenage Engineering/3 computer–0.png', [1080, 1080, 1.0]], ['4.Teenage Engineering/4 computer–0.png', [1080, 1080, 1.0]], ['4.Teenage Engineering/Screen 2.mp4', [1064, 1920, 0.55]], ['4.Teenage Engineering/ruhrgerat 0.jpg', [2066, 3567, 0.58]], ['4.Teenage Engineering/ruhrgerat 1.avi', [1080, 1080, 1.0]], ['4.Teenage Engineering/ruhrgerat 2.jpg', [1080, 1080, 1.0]], ['4.Teenage Engineering/ruhrgerat 3.jpg', [1080, 1080, 1.0]], ['4.Teenage Engineering/ruhrgerat 4.jpg', [1080, 1080, 1.0]]], 
    [21, ['5.Shoes and kicks/1 yzy 1.png', [2700, 2160, 1.25]], ['5.Shoes and kicks/1 yzy 2.jpg', [1440, 1080, 1.33]], ['5.Shoes and kicks/1 yzy 3.jpg', [1440, 1080, 1.33]], ['5.Shoes and kicks/2 yzy w1.jpg', [720, 1280, 0.56]], ['5.Shoes and kicks/2 yzy w2.png', [1080, 1350, 0.8]], ['5.Shoes and kicks/2 yzy w3.png', [1080, 1080, 1.0]], ['5.Shoes and kicks/3 yzy 1.jpg', [1920, 1920, 1.0]], ['5.Shoes and kicks/3 yzy 2.jpg', [1920, 1920, 1.0]], ['5.Shoes and kicks/3 yzy 3.jpg', [1920, 1920, 1.0]], ['5.Shoes and kicks/3 yzy 4.jpg', [1920, 1920, 1.0]], ['5.Shoes and kicks/4 yzy.jpg', [640, 1280, 0.5]], ['5.Shoes and kicks/fjord 1 .jpg', [1350, 1080, 1.25]], ['5.Shoes and kicks/fjord 3.jpg', [1280, 1280, 1.0]], ['5.Shoes and kicks/fjord 4.jpg', [1346, 1080, 1.25]], ['5.Shoes and kicks/fjord 5.jpg', [1346, 1080, 1.25]], ['5.Shoes and kicks/grounds 1.png', [1920, 1920, 1.0]], ['5.Shoes and kicks/grounds 2.png', [1920, 1920, 1.0]], ['5.Shoes and kicks/instolation.jpg', [1080, 1080, 1.0]], ['5.Shoes and kicks/midjourney + vizcom.png', [2160, 3240, 0.67]], ['5.Shoes and kicks/photo_2021-09-06_16-53-03.jpg', [1280, 1280, 1.0]], ['5.Shoes and kicks/scetchers.jpg', [720, 1280, 0.56]]], 
    [8, ['6.Ormi/0001-0300 (1).mp4', [1920, 1080, 1.78]], ['6.Ormi/55(!).mp4', [1280, 720, 1.78]], ['6.Ormi/IMG_0978.MP4', [608, 480, 1.27]], ['6.Ormi/IMG_1529.MOV', [1280, 720, 1.78]], ['6.Ormi/IMG_3039.MP4', [848, 752, 1.13]], ['6.Ormi/IMG_5227.MOV', [1920, 1080, 1.78]], ['6.Ormi/v-ORMI opening soon.mp4', [1920, 1080, 1.78]], ['6.Ormi/Лента.mp4', [2000, 1600, 1.25]]], 
    [30, ['7.Interior and exterior/AO63AbziMzk.jpg', [1100, 1100, 1.0]], ['7.Interior and exterior/Y7f3caT6c3k.jpg', [1080, 1080, 1.0]], ['7.Interior and exterior/b9LcWLEdjsA.jpg', [1080, 1080, 1.0]], ['7.Interior and exterior/iPXsajHJhp8.jpg', [1080, 1080, 1.0]], ['7.Interior and exterior/photo_2021-06-28_22-24-50.jpg', [1080, 1080, 1.0]], ['7.Interior and exterior/photo_2021-06-28_23-48-27.jpg', [1280, 1280, 1.0]], ['7.Interior and exterior/photo_2021-06-28_23-49-21.jpg', [1280, 913, 1.4]], ['7.Interior and exterior/photo_2021-06-28_23-49-47.jpg', [1280, 913, 1.4]], ['7.Interior and exterior/qpf_27Jf-cg.jpg', [1080, 1080, 1.0]], ['7.Interior and exterior/untitled (3).png', [1920, 1920, 1.0]], ['7.Interior and exterior/untitled 2.jpg', [1920, 1920, 1.0]], ['7.Interior and exterior/Без имени-1.jpg', [793, 1120, 0.71]], ['7.Interior and exterior/Без имени-2.jpg', [868, 933, 0.93]], ['7.Interior and exterior/Без имени-3.jpg', [868, 933, 0.93]], ['7.Interior and exterior/Без имени-4.jpg', [525, 933, 0.56]], ['7.Interior and exterior/Дом 1 копия 2.png', [1620, 1620, 1.0]], ['7.Interior and exterior/Дом 1 копия 3.png', [1622, 1620, 1.0]], ['7.Interior and exterior/Дом 1 копия 4.png', [1622, 1620, 1.0]], ['7.Interior and exterior/Дом 1 копия 5.png', [1620, 1620, 1.0]], ['7.Interior and exterior/Дом 1 копия 6.png', [1620, 1620, 1.0]], ['7.Interior and exterior/Дом 1 копия.png', [1620, 1620, 1.0]], ['7.Interior and exterior/Задание 5 (1).png', [1080, 1080, 1.0]], ['7.Interior and exterior/Задание 5 (2).png', [1080, 1080, 1.0]], ['7.Interior and exterior/д1 1-gigapixel-standard-scale-2_00x.jpg', [2160, 2160, 1.0]], ['7.Interior and exterior/д1 2-gigapixel-standard-scale-2_00x.jpg', [2160, 2160, 1.0]], ['7.Interior and exterior/д1 3-gigapixel-standard-scale-2_00x.jpg', [2160, 2160, 1.0]], ['7.Interior and exterior/д1 4-gigapixel-standard-scale-2_00x.jpg', [2160, 2160, 1.0]], ['7.Interior and exterior/кресло 1.png', [1440, 1080, 1.33]], ['7.Interior and exterior/кресло 2.png', [1440, 1080, 1.33]], ['7.Interior and exterior/кресло 3.png', [1080, 1440, 0.75]]],
    [14, ['4.Teenage Engineering/1 computer–0 .png', [1080, 1080, 1.0]], ['4.Teenage Engineering/2 computer–0.png', [1080, 1080, 1.0]], ['4.Teenage Engineering/3 computer–0.png', [1080, 1080, 1.0]], ['4.Teenage Engineering/4 computer–0.png', [1080, 1080, 1.0]], ['4.Teenage Engineering/Screen 2.mp4', [1064, 1920, 0.55]], ['4.Teenage Engineering/ruhrgerat 0.jpg', [2066, 3567, 0.58]], ['4.Teenage Engineering/ruhrgerat 1.avi', [1080, 1080, 1.0]], ['4.Teenage Engineering/ruhrgerat 2.jpg', [1080, 1080, 1.0]], ['4.Teenage Engineering/ruhrgerat 3.jpg', [1080, 1080, 1.0]], ['4.Teenage Engineering/ruhrgerat 4.jpg', [1080, 1080, 1.0]], ['4.Teenage Engineering/1 computer–0 .png', [1080, 1080, 1.0]], ['4.Teenage Engineering/2 computer–0.png', [1080, 1080, 1.0]], ['4.Teenage Engineering/1 computer–0 .png', [1080, 1080, 1.0]], ['4.Teenage Engineering/2 cter0.png', [1080, 1080, 1.0]]]
];
*/
const informationAbotFilesImgPre = 
[
    [8, ['1.Choistudio pre', '2.Package pre', '3.Cheelee pre', '4.Teenage Engineering Pre', '5. Shoes and kicks pre', '6.Ormi Pre', '7. Interior and exterior pre', '8. Manki Panki Pre']], 
    [28, '1.Choistudio pre/01 Элджей pre.gif', '1.Choistudio pre/02 cherep pre.gif', '1.Choistudio pre/03 crocoboy pre.jpg', '1.Choistudio pre/04 cvetok pre.jpg', '1.Choistudio pre/05 clo 1 pre.jpg', '1.Choistudio pre/06 clo 2 pre.jpg', '1.Choistudio pre/28 Zbrush pre.jpeg', '1.Choistudio pre/07 clo 3 pre.jpg', '1.Choistudio pre/08 clo 5 pre.jpg', '1.Choistudio pre/09 cyberpunk pre.gif', '1.Choistudio pre/10 50-50 1 pre.jpg', '1.Choistudio pre/11 50-50 2 pre.jpg', '1.Choistudio pre/12 50-50 3 pre.jpg', '1.Choistudio pre/13 50-50 5 pre.jpg', '1.Choistudio pre/14 Glass 1 pre.jpg', '1.Choistudio pre/15 Glass 2 pre.jpg', '1.Choistudio pre/16 Glass 3 pre.jpg', '1.Choistudio pre/17 Moveli pre.gif', '1.Choistudio pre/18 Stop pre.jpg', '1.Choistudio pre/19 Atomic pre.png', '1.Choistudio pre/20 Atomic pre.jpg', '1.Choistudio pre/21 skeleton pre.jpg', '1.Choistudio pre/22 skillbox pre.gif', '1.Choistudio pre/23 Peble pre.jpg', '1.Choistudio pre/24 Pisca pre.gif', '1.Choistudio pre/25 Hudini voda pre.gif', '1.Choistudio pre/26 Telega online pre.gif', '1.Choistudio pre/27 Test FUD pre.gif'], 
    [26, '2.Package pre/01. Baum pre.jpg', '2.Package pre/02. joj1 Pre.jpg', '2.Package pre/03.joj2 Pre.jpg', '2.Package pre/04.Squira pre.jpg', '2.Package pre/05.Squira pre.jpg', '2.Package pre/06. Plantario pre.jpg', '2.Package pre/07. Hagi pre.jpg', '2.Package pre/08.Altai 1 pre.jpg', '2.Package pre/09.Altai 2 pre.jpg', '2.Package pre/10.w gin 1 pre.jpg', '2.Package pre/11.w gin 2 pre.jpg', '2.Package pre/12.w gin 3pre.jpg', '2.Package pre/13.whealer 1 pre.jpg', '2.Package pre/14.whealer 2 pre.jpg', '2.Package pre/15.whealer 3 pre.jpg', '2.Package pre/16.whealer 4 pre.jpg', '2.Package pre/17.whealer 5 pre.jpg', '2.Package pre/18.korob Pre.gif', '2.Package pre/19.ne pre.jpg', '2.Package pre/20.ne pre.jpg', '2.Package pre/21.ne pre.jpg', '2.Package pre/22.ne pre.jpg', '2.Package pre/23.ne pre.jpg', '2.Package pre/24.ne pre.png', '2.Package pre/25.ne pre.jpg', '2.Package pre/26.kom pre.gif'], 
    [20, '3.Cheelee pre/01-pre.gif', '3.Cheelee pre/02-pre.gif', '3.Cheelee pre/03-pre.gif', '3.Cheelee pre/04-pre.gif', '3.Cheelee pre/05-pre.gif', '3.Cheelee pre/06 pre.jpg', '3.Cheelee pre/07 pre.jpg', '3.Cheelee pre/08 pre.jpg', '3.Cheelee pre/09-pre.gif', '3.Cheelee pre/10-pre.gif', '3.Cheelee pre/11-pre.gif', '3.Cheelee pre/12-pre.gif', '3.Cheelee pre/13 pre.jpg', '3.Cheelee pre/14 pre.jpg', '3.Cheelee pre/15-pre.gif', '3.Cheelee pre/16-pre.gif', '3.Cheelee pre/17 pre.jpg', '3.Cheelee pre/18 pre.jpg', '3.Cheelee pre/19 pre.jpg', '3.Cheelee pre/20-pre.gif'], 
    [10, '4.Teenage Engineering Pre/01 computer0 pre.jpg', '4.Teenage Engineering Pre/02 computer0 pre.jpg', '4.Teenage Engineering Pre/03 computer0 pre.jpg', '4.Teenage Engineering Pre/04 computer0 pre.jpg', '4.Teenage Engineering Pre/05 ruhrgerat 3 pre.jpg', '4.Teenage Engineering Pre/06 ruhrgerat 2 pre.jpg', '4.Teenage Engineering Pre/07 Screen pre.gif', '4.Teenage Engineering Pre/08 ruhrgerat 2 pre.gif', '4.Teenage Engineering Pre/09 ruhrgerat 0 pre.jpg', '4.Teenage Engineering Pre/10 ruhrgerat 4 pre.jpg'], 
    [21, '5. Shoes and kicks pre/01 pre.jpg', '5. Shoes and kicks pre/02 pre.jpg', '5. Shoes and kicks pre/03 pre.jpg', '5. Shoes and kicks pre/04 pre.jpg', '5. Shoes and kicks pre/05 pre.jpg', '5. Shoes and kicks pre/06 pre.png', '5. Shoes and kicks pre/07 pre.jpg', '5. Shoes and kicks pre/08 pre.jpg', '5. Shoes and kicks pre/09 pre.jpg', '5. Shoes and kicks pre/10 pre.png', '5. Shoes and kicks pre/11 pre.jpg', '5. Shoes and kicks pre/12 pre.jpg', '5. Shoes and kicks pre/13 pre.jpg', '5. Shoes and kicks pre/14 pre.jpg', '5. Shoes and kicks pre/15 pre.png', '5. Shoes and kicks pre/16 pre.jpg', '5. Shoes and kicks pre/17 pre.jpg', '5. Shoes and kicks pre/18 pre.jpg', '5. Shoes and kicks pre/19 pre.jpg', '5. Shoes and kicks pre/20 pre.jpg', '5. Shoes and kicks pre/21 pre.jpg'], 
    [8, '6.Ormi Pre/01 pre.gif', '6.Ormi Pre/02 pre.gif', '6.Ormi Pre/03 pre.gif', '6.Ormi Pre/04 pre.gif', '6.Ormi Pre/05 pre.gif', '6.Ormi Pre/06 pre.gif', '6.Ormi Pre/07 pre.gif', '6.Ormi Pre/08 pre.gif'], 
    [28, '7. Interior and exterior pre/01 pre.jpg', '7. Interior and exterior pre/02 pre.jpg', '7. Interior and exterior pre/03 pre.jpg', '7. Interior and exterior pre/04 pre.png', '7. Interior and exterior pre/05 pre.jpg', '7. Interior and exterior pre/06pre.jpg', '7. Interior and exterior pre/07 pre.jpg', '7. Interior and exterior pre/08 pre.jpg', '7. Interior and exterior pre/09 pre.png', '7. Interior and exterior pre/10 pre.png', '7. Interior and exterior pre/11pre.jpg', '7. Interior and exterior pre/12 pre.jpg', '7. Interior and exterior pre/13pre.jpg', '7. Interior and exterior pre/14 pre.jpg', '7. Interior and exterior pre/15 pre.jpg', '7. Interior and exterior pre/16 pre.jpg', '7. Interior and exterior pre/17 pre.jpg', '7. Interior and exterior pre/18 pre.jpg', '7. Interior and exterior pre/19 pre.jpg', '7. Interior and exterior pre/20 pre.jpg', '7. Interior and exterior pre/21 pre.jpg', '7. Interior and exterior pre/22 pre.jpg', '7. Interior and exterior pre/23 pre.jpg', '7. Interior and exterior pre/24 pre.jpg', '7. Interior and exterior pre/25 pre.jpg', '7. Interior and exterior pre/26 pre.jpg', '7. Interior and exterior pre/27 pre.jpg', '7. Interior and exterior pre/28 pre.jpg'], 
    [14, '8. Manki Panki Pre/01 pre.jpg', '8. Manki Panki Pre/02 pre.jpg', '8. Manki Panki Pre/03 pre.jpg', '8. Manki Panki Pre/04 pre.jpg', '8. Manki Panki Pre/05 pre.jpg', '8. Manki Panki Pre/06 pre.jpg', '8. Manki Panki Pre/07 pre.jpg', '8. Manki Panki Pre/08 pre.jpg', '8. Manki Panki Pre/09 pre.jpg', '8. Manki Panki Pre/10 pre.jpg', '8. Manki Panki Pre/11 pre.jpg', '8. Manki Panki Pre/12 pre.jpg', '8. Manki Panki Pre/13 pre.jpg', '8. Manki Panki Pre/14 pre.jpg']
];

const textRu = [

    "В рамках сотрудничества со студией Choistudio и её NFT-метаверса Phenom Metaverse были выполнены работы для различных целей, включая продажу на NFT-маркетах. Кроме того, в ходе сотрудничества с Gambit (МТС) был разработан дизайн для их киберспортивной команды. Особое внимание было уделено удобству использования и визуальной привлекательности, чтобы обеспечить уникальный пользовательский опыт.", 
    "Широкий спектр проектов, для создания которых применялся оригинальный и функциональный подход. Дизайн работ выполнен в ходе сотрудничества с такими известными брендами, как: <br>● Baum — казанский бренд косметики;<br>● 4:33 — бренд коммуникационных карточных игр; <br>● GraywhaleGin — бренд алкогольной продукции;<br>● Работы с подрядчиками компании MankiPanki.", 
    "Motion, баннеры и 3D работы для бренда IT-компании Cheelee, в которой я проработал в качестве дизайнера.",
    "Концепты, созданные для компании Teenage Engineering, команды Ильи Колганова. Реализованные проекты:<br>● корпус для компьютера «Computer–0»;<br>● 3D манипулятор «Ruhrgerat»;</br>● анимированный эвент-стенд.",
    "Детализированные 3D модели кроссовок для конкурсов Adidas, Yeezy, Skechers, Grounds, Dingyun Zhang. На этапе создания концептов сохранялись характерные черты брендового стиля и соблюдались требования к техническому заданию.",
    "3D синематики для бренда Ormi.",
    "Элементы интерьера и экстерьера для студии Романа Власова.",
    "Плакаты для Московского музея каллиграфии и клубов в Москве и Белграде были разработаны в студии MankPanki. Эти уникальные дизайны сочетают современные тренды с элементами каллиграфии, создавая запоминающиеся визуальные образы для привлечения внимания к разнообразным культурным событиям."

];

const textEn = [

    "In collaboration with Choistudio and its NFT Phenom Metaverse projects were fulfilled for a variety of goals including selling on the NFT-markets. Besides, design for the cybersport team was made in cooperation with Gambit (MTC). Particular attention was paid to usability and visual appeal in order to achieve unique user experience.",
    "Wide range of projects, for which creating an original and functional approach was used. Work design was released in collaboration with such famous brands as:<br>● Baum — Kazan cosmetics;<br>● 4:33 — communication card games;<br>● GraywhaleGin — alcohol products;<br>● projects with contractors of the MankiPanki company.",
    "Motion, banners and 3D-projects for the brand of the Cheelee IT-company where I worked as a designer.",
    "Concepts made for the Teenage Engineering company, Ilya Kolganov’s team. Realized projects:<br>● case for «Computer–0»;<br>● 3D device «Ruhrgerat»;<br>● animated event-stand.",
    "Detailed 3D sneakers for the Adidas, Yeezy, Skechers, Grounds, Dingyun Zhang competitions. While concept creating the brand identity was retained and the technical task requirements were complied with.",
    "3D semantics for the Ormi brand",
    "Interior and exterior elements for Roman Vlasov’s studio.",
    "Posters for the Moscow Calligraphy Museum and clubs in Moscow and Belgrade were developed during the work at MankPanki. These unique designs blend contemporary trends with calligraphic elements, creating memorable visual images to draw attention to diverse cultural events."

];

const styleRelationHrigthOnWidth = 
[
    [[1, 2, 3, 3, 4], [3, 3, 2, 1, 4], [2, 4, 1, 3, 3], [2, 3]],
    [[1, 4, 2, 3, 3], [3, 3, 2, 4, 1], [2, 4, 3, 3, 1], [3, 2]],
    [[3, 3, 2, 1, 4], [1, 2, 3, 3, 4], [2, 4, 1, 3, 3], [3, 2]],
    [[3, 3, 2, 4, 1], [1, 4, 2, 3, 3], [2, 4, 3, 3, 1], [3, 2]]
];

const orderProjects = [1, 8, 3, 6, 2, 5, 4, 7];
const divAllProjects = document.getElementById('allProjects');
const nameProjects = informationAbotFilesImg[0][1];
const counterForFor = informationAbotFilesImg[0][0] + 1;
const path = "img_svg/imgs/";
const bolvanka = false;
const pathToBolvanka = 'img_svg/1000062220.jpg';
const discriptionImg = true;
const countRow7 = [3, [9, 9, 7]];

let counterParametrsForThisProject = [];
let imgCalculateInRow = 9;
let allDivForAllProjects = '';
let allDivForProjects = '';
let pathFile;
let pathFilePre;
let pathFile2;
let pathFilePre2;
let style;

function ifTrueDivision(allImg) {

    let ImgInRowNow = 0;
    let result = 0

    for (i = 6; i < imgCalculateInRow; i++) {

        if (allImg < 12) {

            return [false, false];

        }

        ImgInRowNow = Math.floor(allImg / i);
        result = allImg - ImgInRowNow * i;
        
        if (result == 0) {

            return [true, true, i, ImgInRowNow];

        } else if (result == 1) {

            return [true, false, i, ImgInRowNow];

        }

    }

    return [false, false];

}

function analis(restImg, rows, imgInrows, threeBefore) {
   
    if (5 < restImg) {

        return [false, rows, imgInrows, threeBefore, restImg];

    } else if ((restImg / rows - Math.floor(restImg / rows)) == 0 & rows !== 1) {

        imgInrows =  imgInrows + restImg / rows;
        
        return [true, rows, imgInrows, threeBefore, 0];

    } else {

        return [false, rows, imgInrows, threeBefore, restImg];

    }

}

function countRows(number) {

    let threeBefore = (number - 3);
    let restImg = 0;
    let imgInrows = 0;
    let rows = 0;

    if (threeBefore < 12 & threeBefore > 9) {

        rows = 2;
        imgInrows = 5;
        restImg = threeBefore - rows * imgInrows;
        
        return analis(restImg, rows, imgInrows, threeBefore);

    } else if (threeBefore < 10) {

        rows = 1;
        restImg = 0;
        
        return analis(restImg, rows, threeBefore, threeBefore);

    }
 
    let information = ifTrueDivision(threeBefore);

    if (information[0]) {

        if (information[1]) {

            return [true, information[3], information[2], threeBefore, 0];
        
        } else {

            return [false, information[3], information[2], threeBefore, 1];

        }

    }

    imgInrows = imgCalculateInRow;
    rows = Math.floor(threeBefore / imgInrows);

    if (rows == 2 & Math.floor(threeBefore / 5) > 2) {

        rows = Math.floor(threeBefore / 5);
        imgInrows = 5;

    }

    restImg = threeBefore - rows * imgInrows;

    return analis(restImg, rows, imgInrows, threeBefore);

};

function calculateStyleImg(ImgInRow, numberImg, row, project) {

    project = (project - 4 * Math.floor(project / 4));
    row = (row - 3 * Math.floor(row / 3));
    ImgInRow = ImgInRow - numberImg;
    
    let numberImgNow = (numberImg - 5 * Math.floor(numberImg / 5));
    let style = styleRelationHrigthOnWidth[project][row][numberImgNow];

    if (style == 3 & ImgInRow < 2) {

        numberImg++;
        numberImgNow = (numberImg - 4 * Math.floor(numberImg / 4));
        
        return styleRelationHrigthOnWidth[project][row][numberImgNow];

    } else {

        return style;

    }

}

function htmlForThisImg(style, informAbotFilesImg, row, j, counter, bolvanka, informAbotFilesImgPre, isThreeEnd) {

    if (bolvanka) {
 
        if (style == 3) {
            
            return  `<div class="home-frame71">
                        <a data-fancybox="gallery${row + j*10}" data-src="${pathToBolvanka}" data-caption="${counter}">
                            <img style="align: start;;left:0;top:0;" src="${pathToBolvanka}" class="img-rectangle3"/>
                        </a>
                        <a style="align-items: left" data-fancybox="gallery${row + j*10}" data-src="${pathToBolvanka}" data-caption="${counter+1}">
                            <img style="" src="${pathToBolvanka}" class="img-rectangle3"/>
                        </a>
                    </div>`;
            
        } else {

            return  `<a data-fancybox="gallery${row + j*10}" data-src="${pathToBolvanka}" data-caption="${counter}">
                        <img src="${pathToBolvanka}" class="img-rectangle${style}"/>
                    </a>`;

        }

    }

    j = j - 1;
    pathFile = path + "allImg/" + informAbotFilesImg[counter];
    pathFilePre =  path + "pre/" + informAbotFilesImgPre[counter];

    if (style == 3) {

        pathFile2 = path + "allImg/" + informAbotFilesImg[counter+1];
        pathFilePre2 =  path + "pre/" + informAbotFilesImgPre[counter+1];
        
        return  `<div class="home-frame71">
                    <a data-fancybox="gallery${row + j*10}" data-src="${pathFile}" data-caption="${counter}">
                        <img src="${pathFilePre}" class="img-rectangle3"/>
                    </a>
                    <a data-fancybox="gallery${row + j*10}" data-src="${pathFile2}" data-caption="${counter+1}">
                        <img src="${pathFilePre2}" class="img-rectangle3"/>
                    </a>
                </div>`;
        
    } else {

        if (isThreeEnd & (j == 0 || j == 2 || j == 5 || j == 6)) {

            style = "2_1";

        }

        return  `<a data-fancybox="gallery${row + j*10}" data-src="${pathFile}" data-caption="${counter}">
                    <img src="${pathFilePre}" class="img-rectangle${style}"/>
                </a>`;

    }

    // let isMovie = pathFile.includes(".mp4") || pathFile.includes(".avi") || pathFile.includes(".MOV") || pathFile.includes(".MP4");

    // if (style == 3) {

    //     pathFile2 = path + informAbotFilesImg[counter+1][0];
    //     let isMovie2 = pathFile2.includes(".mp4") || pathFile2.includes(".avi") || pathFile2.includes(".MOV") || pathFile2.includes(".MP4");
        
    //     if (!isMovie & !isMovie2) {

    //         return  `<div class="home-frame71">
    //                     <a data-fancybox="gallery${row + j*10}" data-src="${pathFile}" data-caption="${counter}">
    //                         <img src="${pathFile}" class="img-rectangle3"/>
    //                     </a>
    //                     <a data-fancybox="gallery${row + j*10}" data-src="${pathFile2}" data-caption="${counter+1}">
    //                         <img src="${pathFile2}" class="img-rectangle3"/>
    //                     </a>
    //                 </div>`;

    //     } else if (isMovie & isMovie2) {

    //         return  `<div class="home-frame71">
    //                     <a data-fancybox="gallery${row + j*10}" data-src="${pathFile}" data-caption="${counter}">
    //                         <video class="img-rectangle3 videoClass" autoplay loop>
    //                             <source src="${pathFile}" type="video/mp4" />
    //                         </video>
    //                     </a>
    //                     <a data-fancybox="gallery${row + j*10}" data-src="${pathFile2}" data-caption="${counter+1}">
    //                         <video class="img-rectangle3 videoClass" autoplay loop>
    //                             <source src="${pathFile2}" type="video/mp4" />
    //                         </video>
    //                     </a>
    //                 </div>`;

    //     } else {

    //         if (isMovie) {
                
    //             return  `<div class="home-frame71">
    //                         <a data-fancybox="gallery${row + j*10}" data-src="${pathFile2}" data-caption="${counter}">
    //                             <video class="img-rectangle3 videoClass" autoplay loop>
    //                                 <source src="${pathFile2}" type="video/mp4" />
    //                             </video>
    //                         </a>
    //                         <a data-fancybox="gallery${row + j*10}" data-src="${pathFile}" data-caption="${counter+1}">
    //                             <img src="${pathFile}" class="img-rectangle3"/>
    //                         </a>
    //                     </div>`;

    //         } else {

    //             return  `<div class="home-frame71">
    //                         <a data-fancybox="gallery${row + j*10}" data-src="${pathFile}" data-caption="${counter}">
    //                             <img src="${pathFile}" class="img-rectangle3"/>
    //                         </a>
    //                         <a data-fancybox="gallery${row + j*10}" data-src="${pathFile2}" data-caption="${counter+1}">
    //                             <video class="img-rectangle3 videoClass" autoplay loop>
    //                                 <source src="${pathFile}" type="video/mp4" />
    //                             </video>
    //                         </a>
    //                     </div>`;

    //         }

    //     }
        
    // } else {

    //     if (isMovie) {

    //         return  `<a data-fancybox="gallery${row + j*10}" data-src="${pathFile}" data-caption="${counter}">
    //                     <video class="img-rectangle${style} videoClass" autoplay loop>
    //                         <source src="${pathFile}" type="video/mp4" />
    //                     </video>
    //                 </a>`;

    //     } else {

    //         return  `<a data-fancybox="gallery${row + j*10}" data-src="${pathFile}" data-caption="${counter}">
    //                     <img src="${pathFile}" class="img-rectangle${style}"/>
    //                 </a>`;

    //     }

    // }

}

if (discriptionImg) {
        
    for (let jr = 1; jr < counterForFor; jr++) { 

        let j = orderProjects[jr-1];
        allDivForProjects = ''
        counterParametrsForThisProject = countRows(informationAbotFilesImg[j][0]);
        
        let counterImgInRowsNow = 0;
        let restImg = counterParametrsForThisProject[4];
        let counterImgInRows = counterParametrsForThisProject[2];
        let counterRows = counterParametrsForThisProject[1];
        let counter = 1;
        let counterForRow = 1;
        let row = 0;


        if (j == 7) {

            for (row; row < countRow7[0]; row++) {

                counterImgInRowsNow = countRow7[1][row];
    
                for (let img = 0; img < counterImgInRowsNow; img++){
    
                    style = calculateStyleImg(counterImgInRowsNow, img, row, j - 1);
            
                    allDivForProjects += htmlForThisImg(style, informationAbotFilesImg[j], row, j, counter, bolvanka, informationAbotFilesImgPre[j], false);
                    
                    if (style == 3) {counter++; img++};
                    counter++;
                    counterForRow++;
    
                }
                
                counterForRow = 1;
    
                allDivForProjects +=
                            `<div id="divNotClicable" class="last-in-row"></div>
                        </div> 
                    </div>
                    <div class="comtainer-scroll-img dragscroll">
                        <div class="scroll-img">
                            <div id="divNotClicable" class="first-in-row"></div>`;
    
            }

        } else {

            for (row; row < counterRows; row++) {

                if (restImg !== 0) {
    
                    counterImgInRowsNow = counterImgInRows + 1;
                    restImg = restImg - 1;
    
                } else {
    
                    counterImgInRowsNow = counterImgInRows;
    
                }
    
                for (let img = 0; img < counterImgInRowsNow; img++){
    
                    style = calculateStyleImg(counterImgInRowsNow, img, row, j - 1);
    
                    if (row + 1 == counterRows) {style = calculateStyleImg(counterImgInRowsNow, img, 2, j - 1);};
    
                    if(j == 8) {style = 4}
    
                    allDivForProjects += htmlForThisImg(style, informationAbotFilesImg[j], row, j, counter, bolvanka, informationAbotFilesImgPre[j], false);
                    
                    if (style == 3) {counter++; img++};
                    counter++;
                    counterForRow++;
    
                }
                
                counterForRow = 1;
    
                if (j == 8 & row >  0) {

                    allDivForProjects +=
                                `<div id="divNotClicable" class="last-in-row"></div>`;

                } else {

                    allDivForProjects +=
                                `<div id="divNotClicable" class="last-in-row"></div>
                            </div> 
                        </div>
                        <div class="comtainer-scroll-img dragscroll">
                            <div class="scroll-img">
                                <div id="divNotClicable" class="first-in-row"></div>`;

                }
    
            }

        }

        if (j !== 8) {

            if (j == 5) {

                allDivForProjects += htmlForThisImg(2, informationAbotFilesImg[j], row + 1, j, counter, bolvanka, informationAbotFilesImgPre[j], true);
                allDivForProjects += htmlForThisImg(3, informationAbotFilesImg[j], row + 1, j, counter + 1, bolvanka, informationAbotFilesImgPre[j], false);

            }else if (styleRelationHrigthOnWidth[j - 4 * Math.floor(j / 4)][3][0] == 2) {

                allDivForProjects += htmlForThisImg(2, informationAbotFilesImg[j], row + 1, j, counter, bolvanka, informationAbotFilesImgPre[j], true);
                allDivForProjects += htmlForThisImg(3, informationAbotFilesImg[j], row + 1, j, counter + 1, bolvanka, informationAbotFilesImgPre[j], false);
    
            } else {
    
                allDivForProjects += htmlForThisImg(3, informationAbotFilesImg[j], row + 1, j, counter, bolvanka, informationAbotFilesImgPre[j], false);
                allDivForProjects += htmlForThisImg(2, informationAbotFilesImg[j], row + 1, j, counter + 2, bolvanka, informationAbotFilesImgPre[j], true);
    
            }

        }

        let nameProjectIn = nameProjects[j-1];
        let nameProjectInHtml = nameProjectIn.slice(2, -1) + nameProjectIn[nameProjectIn.length - 1];

        if (j == 8) {

            allDivForAllProjects += 
                `<div style="height:3vw"></div>
                <div id="${nameProjectIn}">
                    <span class="home-text">
                        <span style="font-family: NailFont;" id="one">${nameProjectInHtml}</span>
                    </span>
                    <div id="wrapper" class="comtainer-scroll-img dragscroll">
                        <div class="scroll-img">
                            <div style="font-family: NailFont;" id="divNotClicable" class="first-in-row"></div>
                            ${allDivForProjects}
                        </div>  
                    </div>
                    <div class="text_rectangle1">
                        <span class="home-text-1">
                            <span class="langRu" style="font-family: 'Montserrat'">
                                ${textRu[j-1]}
                            </span>
                            <span class="langEn">
                                ${textEn[j-1]}
                            </span>
                        </span>
                    </div>
                </div>`;

        } else {

            allDivForAllProjects += 
            `<div style="height:3vw"></div>
            <div id="${nameProjectIn}">
                <span class="home-text">
                    <span style="font-family: NailFont;" id="one">${nameProjectInHtml}</span>
                </span>
                <div id="wrapper" class="comtainer-scroll-img dragscroll">
                    <div class="scroll-img">
                        <div style="font-family: NailFont;" id="divNotClicable" class="first-in-row"></div>
                            ${allDivForProjects}
                        <div class="text_rectangle">
                            <span class="home-text18">
                                <span class="langRu" style="font-family: 'Montserrat';">
                                    ${textRu[j-1]}
                                </span>
                                <span class="langEn" >
                                    ${textEn[j-1]}
                                </span>
                            </span>
                        </div>
                    </div>  
                </div>
            </div>`;

        }

    }

} else {NaN}

allDivForAllProjects += 
            `<div style="height:3vw"></div>
            <div id="two" style="height:100vh" id="AboutMe">
                <span class="home-text">
                    <span style="font-family: NailFont;" id="one">About Me</span>
                </span>
                <div class="home-text-aboutMe langRu" style="font-family: 'Montserrat'; font-size: 2.25vw">
                    Опыт работы в дизайне 7 лет. Также занимаюсь 3D моделированием. Моими основными инструментами являются:Photoshop, Illustrator, Indesign, Figma, Blender, Cinema 4d, ZBrush, Marvelous, Substance. Умею адаптировать современные нейросетевые команды под софт графического дизайнера. <br>Имею опыт работы с крупными брендами и успешными компаниями в разных отраслях такие как: МТС, Авито, ZNY, Anteater, PLStorage, Liars Collective, Empire of Summer, Zakat Family, VSRap Shop, Four-thirtythree. Умею работать как в команде, так и независимо, быстро адаптироваться к новым требованиям и срокам. <br>Имею развитые коммуникативные навыки, умение убеждать и донести свои идеи до клиента, команды или руководства. <br>Хорошо осведомлен в последних тенденциях дизайна и искусства, а также в технических новинках, нейросетях связанных с дизайном и визуалом.
                </div>
                <div class="home-text-aboutMe langEn">
                    Work experience in design for 8 years. I am also engaged in 3D modeling. My main tools include Photoshop, Illustrator, Indesign, Figma, Blender, Cinema 4d, ZBrush, Marvelous, Substance. I can adapt modern neural network commands to graphic design software. <br>I have experience working with major brands and successful companies in various industries such as MTS, Avito, ZNY, Anteater, PLStorage, Liars Collective, Empire of Summer, Zakat Family, VSRap Shop, Four-thirtythree. <br>I can work both in a team and independently, quickly adapt to new requirements and deadlines. I have developed communication skills, the ability to persuade and convey my ideas to clients, teams, or management. <br>I am well-informed about the latest trends in design and art, as well as technological innovations, neural networks related to design and visuals.                
                </div>
            </div>`;


console.log(allDivForAllProjects);

divAllProjects.innerHTML = allDivForAllProjects;