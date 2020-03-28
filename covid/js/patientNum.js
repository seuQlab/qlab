var patient = {"北京市":[10,14.0,26.0,41.0,51.0,68.0,80.0,91.0,114.0,121.0,156.0,183.0,212.0,228.0,253.0,274.0,297.0,315.0,326.0,337.0,342.0,352.0,366.0,372.0,375.0,380.0,381.0,387.0,393.0,395.0,396.0,399.0,399.0,399.0,400.0,400.0,410.0,410.0,411.0,413.0,414.0,414.0,417.0,418.0,422.0,426.0,428.0,428.0,429.0,435.0,435,436.0,437.0,442.0,446.0,455.0,458.0,479.0],
"天津市":[2,4.0,5.0,10.0,13.0,14.0,23.0,24.0,28.0,28.0,37.0,45.0,48.0,60.0,67.0,69.0,79.0,88.0,88.0,91.0,95.0,106.0,113.0,119.0,120.0,122.0,124.0,127.0,128.0,130.0,131.0,133.0,135.0,135.0,135.0,135.0,135.0,136.0,136.0,136.0,136.0,136.0,136.0,136.0,136.0,136.0,136.0,136.0,136.0,136.0,136,136.0,136.0,136.0,136.0,136.0,136.0,136.0],
"河北省":[0,1.0,2.0,8.0,13.0,18.0,33.0,48.0,65.0,82.0,96.0,104.0,113.0,126.0,135.0,157.0,171.0,195.0,206.0,218.0,239.0,251.0,265.0,283.0,291.0,300.0,301.0,302.0,306.0,307.0,308.0,309.0,311.0,311.0,311.0,312.0,317.0,318.0,318.0,318.0,318.0,318.0,318.0,318.0,318.0,318.0,318.0,318.0,318.0,318.0,318,318.0,318.0,318.0,318.0,318.0,318.0,318.0],
"山西省":[0,1.0,1.0,6.0,9.0,13.0,20.0,27.0,35.0,39.0,47.0,56.0,66.0,74.0,81.0,90.0,96.0,103.0,115.0,119.0,122.0,124.0,126.0,126.0,127.0,128.0,129.0,130.0,131.0,131.0,132.0,132.0,132.0,132.0,133.0,133.0,133.0,133.0,133.0,133.0,133.0,133.0,133.0,133.0,133.0,133.0,133.0,133.0,133.0,133.0,133,133.0,133.0,133.0,133.0,133.0,133.0,133.0],
"内蒙古自治区":[0,0.0,1.0,2.0,7.0,11.0,13.0,15.0,18.0,20.0,23.0,27.0,34.0,35.0,42.0,46.0,50.0,52.0,54.0,58.0,58.0,60.0,61.0,65.0,68.0,70.0,72.0,73.0,75.0,75.0,75.0,75.0,75.0,75.0,75.0,75.0,75.0,75.0,75.0,75.0,75.0,75.0,75.0,75.0,75.0,75.0,75.0,75.0,75.0,75.0,75,75.0,75.0,75.0,75.0,75.0,75.0,75.0],
"辽宁省":[0,2.0,3.0,12.0,19.0,22.0,27.0,36.0,41.0,45.0,60.0,69.0,73.0,77.0,81.0,89.0,95.0,103.0,105.0,107.0,108.0,116.0,116.0,117.0,119.0,120.0,121.0,121.0,121.0,121.0,121.0,121.0,121.0,121.0,121.0,121.0,121.0,121.0,121.0,122.0,122.0,125.0,125.0,125.0,125.0,125.0,125.0,125.0,125.0,125.0,125,125.0,125.0,125.0,125.0,125.0,125.0,125.0],
"吉林省":[0,0.0,3.0,4.0,4.0,6.0,8.0,9.0,14.0,14.0,17.0,23.0,31.0,42.0,54.0,59.0,65.0,69.0,78.0,80.0,81.0,83.0,84.0,86.0,88.0,89.0,89.0,89.0,90.0,91.0,91.0,91.0,91.0,93.0,93.0,93.0,93.0,93.0,93.0,93.0,93.0,93.0,93.0,93.0,93.0,93.0,93.0,93.0,93.0,93.0,93,93.0,93.0,93.0,93.0,93.0,93.0,93.0],
"黑龙江省":[0,1.0,4.0,9.0,15.0,21.0,30.0,37.0,43.0,59.0,80.0,95.0,118.0,155.0,190.0,226.0,263.0,281.0,307.0,331.0,360.0,378.0,395.0,418.0,425.0,445.0,457.0,464.0,470.0,476.0,479.0,479.0,480.0,480.0,480.0,480.0,480.0,480.0,480.0,480.0,480.0,480.0,480.0,481.0,481.0,481.0,481.0,481.0,481.0,482.0,482,482.0,482.0,482.0,482.0,482.0,482.0,483.0],
"上海市":[9,16.0,20.0,33.0,40.0,53.0,66.0,80.0,101.0,128.0,153.0,177.0,193.0,208.0,233.0,254.0,269.0,281.0,292.0,295.0,302.0,306.0,313.0,318.0,326.0,328.0,331.0,333.0,333.0,333.0,334.0,334.0,335.0,335.0,335.0,336.0,337.0,337.0,337.0,337.0,337.0,338.0,338.0,338.0,339.0,342.0,342.0,342.0,342.0,344.0,344,346.0,350.0,353.0,355.0,358.0,361.0,363.0],
"江苏省":[0,1.0,9.0,18.0,31.0,47.0,70.0,99.0,129.0,168.0,202.0,236.0,271.0,308.0,341.0,373.0,408.0,439.0,468.0,492.0,515.0,543.0,570.0,593.0,604.0,617.0,626.0,629.0,631.0,631.0,631.0,631.0,631.0,631.0,631.0,631.0,631.0,631.0,631.0,631.0,631.0,631.0,631.0,631.0,631.0,631.0,631.0,631.0,631.0,631.0,631,631.0,631.0,631.0,631.0,631.0,631.0,631.0],
"浙江省":[5,10.0,43.0,62.0,104.0,128.0,173.0,296.0,428.0,537.0,599.0,661.0,724.0,829.0,895.0,954.0,994.0,1036.0,1063.0,1092.0,1117.0,1131.0,1145.0,1155.0,1162.0,1167.0,1171.0,1172.0,1173.0,1175.0,1203.0,1205.0,1205.0,1205.0,1205.0,1205.0,1205.0,1205.0,1205.0,1205.0,1206.0,1213.0,1213.0,1215.0,1215.0,1215.0,1215.0,1215.0,1215.0,1215.0,1215,1215.0,1215.0,1219.0,1219.0,1220.0,1220.0,1221.0],
"安徽省":[0,1.0,15.0,39.0,60.0,70.0,106.0,152.0,200.0,237.0,297.0,340.0,408.0,480.0,530.0,591.0,665.0,733.0,779.0,830.0,860.0,889.0,910.0,934.0,950.0,962.0,973.0,982.0,986.0,987.0,988.0,989.0,989.0,989.0,989.0,989.0,989.0,990.0,990.0,990.0,990.0,990.0,990.0,990.0,990.0,990.0,990.0,990.0,990.0,990.0,990,990.0,990.0,990.0,990.0,990.0,990.0,990.0],
"福建省":[0,1.0,5.0,5.0,16.0,35.0,59.0,82.0,101.0,120.0,144.0,159.0,179.0,194.0,205.0,215.0,224.0,239.0,250.0,261.0,267.0,272.0,279.0,281.0,285.0,287.0,290.0,292.0,293.0,293.0,293.0,293.0,293.0,293.0,294.0,294.0,296.0,296.0,296.0,296.0,296.0,296.0,296.0,296.0,296.0,296.0,296.0,296.0,296.0,296.0,296,296.0,296.0,296.0,296.0,296.0,296.0,296.0],
"江西省":[2,2.0,7.0,18.0,36.0,48.0,72.0,109.0,162.0,240.0,286.0,332.0,391.0,476.0,548.0,600.0,661.0,698.0,739.0,772.0,804.0,844.0,872.0,900.0,913.0,925.0,930.0,933.0,934.0,935.0,935.0,935.0,935.0,935.0,935.0,935.0,935.0,936.0,936.0,936.0,936.0,936.0,936.0,936.0,936.0,936.0,936.0,936.0,936.0,936.0,936,936.0,936.0,936.0,936.0,936.0,936.0,936.0],
"山东省":[1,2.0,9.0,21.0,36.0,63.0,87.0,121.0,145.0,178.0,202.0,225.0,246.0,270.0,298.0,343.0,379.0,407.0,435.0,459.0,486.0,497.0,506.0,519.0,530.0,537.0,541.0,543.0,544.0,546.0,748.0,750.0,754.0,755.0,755.0,756.0,756.0,756.0,756.0,756.0,758.0,758.0,758.0,758.0,758.0,758.0,758.0,758.0,758.0,759.0,760,760.0,760.0,760.0,760.0,761.0,761.0,761.0],
"河南省":[1,5.0,9.0,32.0,83.0,128.0,168.0,206.0,278.0,352.0,422.0,493.0,566.0,675.0,764.0,851.0,914.0,980.0,1033.0,1073.0,1105.0,1135.0,1169.0,1184.0,1212.0,1231.0,1246.0,1257.0,1261.0,1265.0,1267.0,1270.0,1271.0,1271.0,1271.0,1271.0,1272.0,1272.0,1272.0,1272.0,1272.0,1272.0,1272.0,1272.0,1272.0,1272.0,1272.0,1272.0,1272.0,1272.0,1273,1273.0,1273.0,1273.0,1273.0,1273.0,1273.0,1273.0],
"湖北省":[375,444.0,549.0,729.0,1052.0,1423.0,2714.0,3554.0,4586.0,5806.0,7153.0,9074.0,11177.0,13522.0,16678.0,19665.0,22112.0,24953.0,27013.0,29631.0,31728.0,33366.0,48206.0,51986.0,54406.0,56249.0,58182.0,59989.0,61682.0,62457.0,63088.0,63454.0,64084.0,64287.0,64786.0,65187.0,65596.0,65914.0,66337.0,66907.0,67103.0,67217.0,67332.0,67466.0,67592.0,67666.0,67707.0,67743.0,67760.0,67773.0,67781,67786.0,67790.0,67794.0,67798.0,67799.0,67800.0,67800.0],
"湖南省":[1,4.0,24.0,43.0,69.0,100.0,143.0,221.0,277.0,332.0,389.0,463.0,521.0,593.0,661.0,711.0,772.0,803.0,838.0,879.0,912.0,946.0,968.0,988.0,1001.0,1004.0,1006.0,1007.0,1008.0,1010.0,1011.0,1013.0,1016.0,1016.0,1016.0,1016.0,1017.0,1017.0,1018.0,1018.0,1018.0,1018.0,1018.0,1018.0,1018.0,1018.0,1018.0,1018.0,1018.0,1018.0,1018,1018.0,1018.0,1018.0,1018.0,1018.0,1018.0,1018.0],
"广东省":[26,32.0,53.0,78.0,98.0,146.0,188.0,241.0,311.0,393.0,520.0,604.0,683.0,797.0,870.0,944.0,1018.0,1075.0,1120.0,1151.0,1177.0,1219.0,1241.0,1261.0,1294.0,1316.0,1322.0,1328.0,1331.0,1332.0,1333.0,1339.0,1342.0,1345.0,1347.0,1347.0,1347.0,1348.0,1349.0,1349.0,1350.0,1350.0,1350.0,1350.0,1351.0,1352.0,1352.0,1352.0,1353.0,1353.0,1356,1356.0,1356.0,1357.0,1361.0,1364.0,1369.0,1378.0],
"广西壮族自治区":[0,5.0,13.0,23.0,33.0,46.0,51.0,58.0,78.0,87.0,100.0,111.0,127.0,139.0,150.0,168.0,172.0,183.0,195.0,210.0,215.0,222.0,222.0,226.0,235.0,237.0,238.0,242.0,244.0,245.0,246.0,249.0,249.0,251.0,252.0,252.0,252.0,252.0,252.0,252.0,252.0,252.0,252.0,252.0,252.0,252.0,252.0,252.0,252.0,252.0,252,252.0,252.0,252.0,252.0,253.0,253.0,253.0],
"海南省":[0,4.0,8.0,17.0,22.0,31.0,40.0,43.0,46.0,49.0,57.0,63.0,70.0,78.0,89.0,100.0,111.0,122.0,128.0,136.0,142.0,151.0,157.0,157.0,162.0,162.0,162.0,163.0,163.0,168.0,168.0,168.0,168.0,168.0,168.0,168.0,168.0,168.0,168.0,168.0,168.0,168.0,168.0,168.0,168.0,168.0,168.0,168.0,168.0,168.0,168,168.0,168.0,168.0,168.0,168.0,168.0,168.0],
"重庆市":[5,6.0,27.0,57.0,75.0,110.0,132.0,147.0,165.0,206.0,238.0,262.0,300.0,337.0,366.0,389.0,411.0,426.0,446.0,468.0,486.0,505.0,518.0,529.0,537.0,544.0,551.0,553.0,555.0,560.0,567.0,572.0,573.0,575.0,575.0,575.0,575.0,575.0,575.0,575.0,575.0,575.0,575.0,575.0,575.0,575.0,575.0,575.0,575.0,575.0,575,575.0,575.0,575.0,575.0,575.0,575.0,575.0],
"四川省":[2,5.0,15.0,28.0,44.0,69.0,90.0,108.0,141.0,177.0,207.0,231.0,254.0,282.0,301.0,321.0,344.0,363.0,386.0,405.0,417.0,436.0,451.0,463.0,470.0,481.0,495.0,508.0,514.0,520.0,525.0,526.0,526.0,527.0,529.0,531.0,534.0,538.0,538.0,538.0,538.0,538.0,538.0,539.0,539.0,539.0,539.0,539.0,539.0,539.0,539,539.0,539.0,539.0,539.0,539.0,540.0,540.0],
"贵州省":[0,1.0,3.0,4.0,5.0,7.0,9.0,9.0,12.0,15.0,29.0,38.0,46.0,56.0,64.0,69.0,77.0,89.0,96.0,109.0,118.0,131.0,133.0,140.0,143.0,144.0,146.0,146.0,146.0,146.0,146.0,146.0,146.0,146.0,146.0,146.0,146.0,146.0,146.0,146.0,146.0,146.0,146.0,146.0,146.0,146.0,146.0,146.0,146.0,146.0,146,146.0,146.0,146.0,146.0,146.0,146.0,146.0],
"云南省":[1,1.0,1.0,1.0,11.0,19.0,26.0,51.0,70.0,80.0,91.0,99.0,109.0,117.0,122.0,128.0,135.0,138.0,141.0,141.0,149.0,154.0,155.0,162.0,168.0,169.0,171.0,172.0,173.0,173.0,174.0,174.0,174.0,174.0,174.0,174.0,174.0,174.0,174.0,174.0,174.0,174.0,174.0,174.0,174.0,174.0,174.0,174.0,174.0,174.0,174,174.0,174.0,174.0,175.0,176.0,176.0,176.0],
"西藏自治区":[0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1,1.0,1.0,1.0,1.0,1.0,1.0,1.0],
"陕西省":[0,0.0,3.0,15.0,22.0,35.0,46.0,56.0,63.0,86.0,101.0,116.0,128.0,142.0,165.0,173.0,184.0,195.0,208.0,213.0,219.0,225.0,229.0,230.0,232.0,236.0,240.0,240.0,242.0,245.0,245.0,245.0,245.0,245.0,245.0,245.0,245.0,245.0,245.0,245.0,245.0,245.0,245.0,245.0,245.0,245.0,245.0,245.0,245.0,245.0,245,245.0,245.0,245.0,245.0,246.0,246.0,246.0],
"甘肃省":[0,0.0,2.0,4.0,7.0,14.0,19.0,24.0,26.0,29.0,35.0,40.0,51.0,55.0,57.0,62.0,67.0,71.0,79.0,83.0,86.0,86.0,87.0,90.0,90.0,90.0,90.0,91.0,91.0,91.0,91.0,91.0,91.0,91.0,91.0,91.0,91.0,91.0,91.0,91.0,91.0,91.0,91.0,91.0,102.0,119.0,120.0,124.0,124.0,125.0,127,127.0,129.0,132.0,133.0,133.0,133.0,133.0],
"青海省":[0,0.0,0.0,0.0,1.0,4.0,6.0,6.0,6.0,8.0,9.0,11.0,13.0,15.0,17.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18.0,18,18.0,18.0,18.0,18.0,18.0,18.0,18.0],
"宁夏回族自治区":[0,0.0,2.0,3.0,4.0,7.0,11.0,11.0,17.0,21.0,26.0,28.0,31.0,34.0,34.0,40.0,43.0,44.0,45.0,49.0,53.0,58.0,64.0,67.0,70.0,70.0,70.0,70.0,71.0,71.0,71.0,71.0,71.0,71.0,71.0,71.0,72.0,72.0,73.0,73.0,74.0,74.0,75.0,75.0,75.0,75.0,75.0,75.0,75.0,75.0,75,75.0,75.0,75.0,75.0,75.0,75.0,75.0],
"新疆维吾尔自治区":[0,2.0,2.0,3.0,4.0,5.0,10.0,13.0,14.0,17.0,18.0,21.0,24.0,29.0,32.0,36.0,39.0,42.0,45.0,49.0,55.0,59.0,63.0,65.0,70.0,71.0,75.0,76.0,76.0,76.0,76.0,76.0,76.0,76.0,76.0,76.0,76.0,76.0,76.0,76.0,76.0,76.0,76.0,76.0,76.0,76.0,76.0,76.0,76.0,76.0,76,76.0,76.0,76.0,76.0,76.0,76.0,76.0],

};

var cityName = [
    "北京市",
    "天津市",
    "河北省",
    "山西省",
    "内蒙古自治区",
    "辽宁省",
    "吉林省",
    "黑龙江省",
    "上海市",
    "江苏省",
    "浙江省",
    "安徽省",
    "福建省",
    "江西省",
    "山东省",
    "河南省",
    "湖北省",
    "湖南省",
    "广东省",
    "广西壮族自治区",
    "海南省",
    "重庆市",
    "四川省",
    "贵州省",
    "云南省",
    "西藏自治区",
    "陕西省",
    "甘肃省",
    "青海省",
    "宁夏回族自治区",
    "新疆维吾尔自治区",
    
]

var time = ["1.21","1.22","1.23","1.24","1.25","1.26","1.27","1.28","1.29","1.30","1.31","2.1", "2.2","2.3","2.4","2.5","2.6",
"2.7","2.8","2.9","2.10","2.11","2.12","2.13","2.14","2.15","2.16","2.17","2.18","2.19",
"2.20","2.21","2.22","2.23","2.24","2.25","2.26","2.27","2.28","2.29", 
"3.1","3.2","3.3","3.4","3.5","3.6","3.7","3.8","3.9","3.10","3.11","3.12","3.13","3.14","3.15","3.16","3.17","3.18"
]
