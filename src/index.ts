import { strictEqual } from "assert";

const svg = `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg" stroke="null">
<g stroke="null">
 <title stroke="null">Layer 1</title>
 <rect id="svg_1" height="20" width="20" y="252.2" x="0" stroke="#000" fill="#fff"/>
 <rect id="svg_2" height="20" width="20" y="152.2" x="240" stroke="#000" fill="#fff"/>
 <rect id="svg_3" height="20" width="20" y="232.2" x="0" stroke="#000" fill="#fff"/>
 <rect id="svg_4" height="20" width="20" y="232.2" x="300" stroke="#000" fill="#fff"/>
 <rect id="svg_5" height="20" width="20" y="212.2" x="320" stroke="#000" fill="#fff"/>
 <rect id="svg_6" height="20" width="20" y="252.2" x="120" stroke="#000" fill="#fff"/>
 <rect id="svg_7" height="20" width="20" y="272.2" x="140" stroke="#000" fill="#fff"/>
 <rect id="svg_8" height="20" width="20" y="252.2" x="360" stroke="#000" fill="#fff"/>
 <rect id="svg_9" height="20" width="20" y="272.2" x="180" stroke="#000" fill="#fff"/>
 <rect id="svg_10" height="20" width="20" y="232.2" x="120" stroke="#000" fill="#fff"/>
 <rect id="svg_11" height="20" width="20" y="252.2" x="100" stroke="#000" fill="#fff"/>
 <rect id="svg_12" height="20" width="20" y="312.2" x="60" stroke="#000" fill="#fff"/>
 <rect stroke="#000" id="svg_13" height="20" width="20" y="252.2" x="60" fill="#fff"/>
 <rect id="svg_14" height="20" width="20" y="252.2" x="80" stroke="#000" fill="#fff"/>
 <rect id="svg_15" height="20" width="20" y="272.2" x="80" stroke="#000" fill="#fff"/>
 <rect id="svg_16" height="20" width="20" y="292.2" x="80" stroke="#000" fill="#fff"/>
 <rect id="svg_17" height="20" width="20" y="312.2" x="80" stroke="#000" fill="#fff"/>
 <rect id="svg_18" height="20" width="20" y="252.2" x="40" stroke="#000" fill="#fff"/>
 <rect id="svg_19" height="20" width="20" y="252.2" x="20" stroke="#000" fill="#fff"/>
 <rect id="svg_20" height="20" width="20" y="272.2" x="380" stroke="#000" fill="#fff"/>
 <rect id="svg_21" height="20" width="20" y="292.2" x="380" stroke="#000" fill="#fff"/>
 <rect id="svg_22" height="20" width="20" y="332.2" x="60" stroke="#000" fill="#fff"/>
 <rect id="svg_23" height="20" width="20" y="312.2" x="380" stroke="#000" fill="#fff"/>
 <rect id="svg_24" height="20" width="20" y="312.2" x="40" stroke="#000" fill="#fff"/>
 <rect id="svg_25" height="20" width="20" y="272.2" x="40" stroke="#000" fill="#fff"/>
 <rect id="svg_26" height="20" width="20" y="292.2" x="40" stroke="#000" fill="#fff"/>
 <rect id="svg_27" height="20" width="20" y="272.2" x="20" stroke="#000" fill="#fff"/>
 <rect id="svg_28" height="20" width="20" y="232.2" x="340" stroke="#000" fill="#fff"/>
 <rect id="svg_29" height="20" width="20" y="272.2" x="420" stroke="#000" fill="#fff"/>
 <rect id="svg_30" height="20" width="20" y="292.2" x="420" stroke="#000" fill="#fff"/>
 <rect id="svg_31" height="20" width="20" y="312.2" x="420" stroke="#000" fill="#fff"/>
 <rect id="svg_32" height="20" width="20" y="332.2" x="400" stroke="#000" fill="#fff"/>
 <rect id="svg_33" height="20" width="20" y="232.2" x="280" stroke="#000" fill="#fff"/>
 <rect id="svg_34" height="20" width="20" y="212.2" x="260" stroke="#000" fill="#fff"/>
 <rect id="svg_35" height="20" width="20" y="192.2" x="260" stroke="#000" fill="#fff"/>
 <rect id="svg_36" height="20" width="20" y="172.2" x="240" stroke="#000" fill="#fff"/>
 <rect id="svg_37" height="20" width="20" y="192.2" x="220" stroke="#000" fill="#fff"/>
 <rect id="svg_38" height="20" width="20" y="212.2" x="220" stroke="#000" fill="#fff"/>
 <rect id="svg_39" height="20" width="20" y="232.2" x="200" stroke="#000" fill="#fff"/>
 <rect id="svg_40" height="20" width="20" y="252.2" x="160" stroke="#000" fill="#fff"/>
 <rect id="svg_41" height="20" width="20" y="272.2" x="160" stroke="#000" fill="#fff"/>
 <rect id="svg_42" height="20" width="20" y="272.2" x="60" stroke="#000" fill="#fff"/>
 <rect id="svg_43" height="20" width="20" y="292.2" x="60" stroke="#000" fill="#fff"/>
 <rect id="svg_44" height="20" width="20" y="312.2" x="160" stroke="#000" fill="#fff"/>
 <rect id="svg_45" height="20" width="20" y="292.2" x="160" stroke="#000" fill="#fff"/>
 <rect id="svg_46" height="20" width="20" y="232.2" x="320" stroke="#000" fill="#fff"/>
 <rect id="svg_47" height="20" width="20" y="192.2" x="240" stroke="#000" fill="#fff"/>
 <rect id="svg_48" height="20" width="20" y="212.2" x="240" stroke="#000" fill="#fff"/>
 <rect id="svg_49" height="20" width="20" y="232.2" x="240" stroke="#000" fill="#fff"/>
 <rect id="svg_50" height="20" width="20" y="232.2" x="260" stroke="#000" fill="#fff"/>
 <rect id="svg_51" height="20" width="20" y="232.2" x="220" stroke="#000" fill="#fff"/>
 <rect id="svg_52" height="20" width="20" y="192.2" x="440" stroke="#000" fill="#fff"/>
 <rect id="svg_53" height="20" width="20" y="212.2" x="440" stroke="#000" fill="#fff"/>
 <rect id="svg_54" height="20" width="20" y="232.2" x="440" stroke="#000" fill="#fff"/>
 <rect id="svg_55" height="20" width="20" y="252.2" x="420" stroke="#000" fill="#fff"/>
 <rect id="svg_56" height="20" width="20" y="252.2" x="380" stroke="#000" fill="#fff"/>
 <rect id="svg_57" height="20" width="20" y="272.2" x="400" stroke="#000" fill="#fff"/>
 <rect id="svg_58" height="20" width="20" y="292.2" x="400" stroke="#000" fill="#fff"/>
 <rect id="svg_59" height="20" width="20" y="312.2" x="400" stroke="#000" fill="#fff"/>
 <rect id="svg_60" height="20" width="20" y="252.2" x="140" stroke="#000" fill="#fff"/>
 <rect id="svg_61" height="20" width="20" y="252.2" x="340" stroke="#000" fill="#fff"/>
 <rect id="svg_62" height="20" width="20" y="252.2" x="320" stroke="#000" fill="#fff"/>
 <rect id="svg_63" height="20" width="20" y="252.2" x="300" stroke="#000" fill="#fff"/>
 <rect id="svg_64" height="20" width="20" y="252.2" x="280" stroke="#000" fill="#fff"/>
 <rect id="svg_65" height="20" width="20" y="252.2" x="240" stroke="#000" fill="#fff"/>
 <rect id="svg_66" height="20" width="20" y="252.2" x="220" stroke="#000" fill="#fff"/>
 <rect id="svg_67" height="20" width="20" y="252.2" x="200" stroke="#000" fill="#fff"/>
 <rect id="svg_68" height="20" width="20" y="252.2" x="180" stroke="#000" fill="#fff"/>
 <rect id="svg_69" height="20" width="20" y="212.2" x="500" stroke="#000" fill="#fff"/>
 <rect id="svg_70" height="20" width="20" y="212.2" x="480" stroke="#000" fill="#fff"/>
 <rect id="svg_71" height="20" width="20" y="192.2" x="500" stroke="#000" fill="#fff"/>
 <rect id="svg_72" height="20" width="20" y="192.2" x="480" stroke="#000" fill="#fff"/>
 <rect id="svg_73" height="20" width="20" y="172.2" x="500" stroke="#000" fill="#fff"/>
 <rect id="svg_74" height="20" width="20" y="152.2" x="500" stroke="#000" fill="#fff"/>
 <rect id="svg_75" height="20" width="20" y="172.2" x="480" stroke="#000" fill="#fff"/>
 <rect id="svg_76" height="20" width="20" y="152.2" x="480" stroke="#000" fill="#fff"/>
 <rect id="svg_77" height="20" width="20" y="132.2" x="480" stroke="#000" fill="#fff"/>
 <rect id="svg_78" height="20" width="20" y="232.2" x="460" stroke="#000" fill="#fff"/>
 <rect id="svg_79" height="20" width="20" y="212.2" x="460" stroke="#000" fill="#fff"/>
 <rect id="svg_80" height="20" width="20" y="192.2" x="460" stroke="#000" fill="#fff"/>
 <rect id="svg_81" height="20" width="20" y="172.2" x="460" stroke="#000" fill="#fff"/>
 <rect id="svg_82" height="20" width="20" y="152.2" x="460" stroke="#000" fill="#fff"/>
 <rect id="svg_83" height="20" width="20" y="172.2" x="440" stroke="#000" fill="#fff"/>
 <rect id="svg_84" height="20" width="20" y="252.2" x="440" stroke="#000" fill="#fff"/>
 <rect id="svg_85" height="20" width="20" y="232.2" x="400" stroke="#000" fill="#fff"/>
 <rect id="svg_86" height="20" width="20" y="292.2" x="260" stroke="#000" fill="#fff"/>
 <rect id="svg_87" height="20" width="20" y="272.2" x="280" stroke="#000" fill="#fff"/>
 <rect id="svg_88" height="20" width="20" y="272.2" x="240" stroke="#000" fill="#fff"/>
 <rect id="svg_89" height="20" width="20" y="272.2" x="260" stroke="#000" fill="#fff"/>
 <rect id="svg_90" height="20" width="20" y="232.2" x="540" stroke="#000" fill="#fff"/>
 <rect id="svg_91" height="20" width="20" y="232.2" x="520" stroke="#000" fill="#fff"/>
 <rect id="svg_92" height="20" width="20" y="212.2" x="540" stroke="#000" fill="#fff"/>
 <rect id="svg_93" height="20" width="20" y="212.2" x="520" stroke="#000" fill="#fff"/>
 <rect id="svg_94" height="20" width="20" y="252.2" x="580" stroke="#000" fill="#fff"/>
 <rect id="svg_95" height="20" width="20" y="192.2" x="540" stroke="#000" fill="#fff"/>
 <rect id="svg_96" height="20" width="20" y="172.2" x="540" stroke="#000" fill="#fff"/>
 <rect id="svg_97" height="20" width="20" y="192.2" x="520" stroke="#000" fill="#fff"/>
 <rect id="svg_98" height="20" width="20" y="252.2" x="500" stroke="#000" fill="#fff"/>
 <rect id="svg_99" height="20" width="20" y="232.2" x="500" stroke="#000" fill="#fff"/>
 <rect id="svg_101" height="20" width="20" y="252.2" x="460" stroke="#000" fill="#fff"/>
 <rect id="svg_102" height="20" width="20" y="252.2" x="480" stroke="#000" fill="#fff"/>
 <rect id="svg_103" height="20" width="20" y="232.2" x="480" stroke="#000" fill="#fff"/>
 <rect id="svg_104" height="20" width="20" y="292.2" x="560" stroke="#000" fill="#fff"/>
 <rect id="svg_105" height="20" width="20" y="272.2" x="560" stroke="#000" fill="#fff"/>
 <rect id="svg_106" height="20" width="20" y="252.2" x="560" stroke="#000" fill="#fff"/>
 <rect id="svg_107" height="20" width="20" y="252.2" x="540" stroke="#000" fill="#fff"/>
 <rect id="svg_108" height="20" width="20" y="252.2" x="520" stroke="#000" fill="#fff"/>
 <rect id="svg_109" height="20" width="20" y="232.2" x="560" stroke="#000" fill="#fff"/>
 <rect id="svg_110" height="20" width="20" y="212.2" x="560" stroke="#000" fill="#fff"/>
 <rect id="svg_111" height="20" width="20" y="252.2" x="760" stroke="#000" fill="#fff"/>
 <rect id="svg_112" height="20" width="20" y="272.2" x="660" stroke="#000" fill="#fff"/>
 <rect id="svg_113" height="20" width="20" y="252.2" x="640" stroke="#000" fill="#fff"/>
 <rect id="svg_114" height="20" width="20" y="292.2" x="660" stroke="#000" fill="#fff"/>
 <rect id="svg_115" height="20" width="20" y="292.2" x="680" stroke="#000" fill="#fff"/>
 <rect id="svg_116" height="20" width="20" y="312.2" x="660" stroke="#000" fill="#fff"/>
 <rect id="svg_117" height="20" width="20" y="292.2" x="640" stroke="#000" fill="#fff"/>
 <rect id="svg_118" height="20" width="20" y="272.2" x="640" stroke="#000" fill="#fff"/>
 <rect id="svg_119" height="20" width="20" y="252.2" x="600" stroke="#000" fill="#fff"/>
 <rect id="svg_120" height="20" width="20" y="232.2" x="580" stroke="#000" fill="#fff"/>
 <rect id="svg_121" height="20" width="20" y="232.2" x="720" stroke="#000" fill="#fff"/>
 <rect id="svg_122" height="20" width="20" y="352.2" x="660" stroke="#000" fill="#fff"/>
 <rect id="svg_123" height="20" width="20" y="332.2" x="660" stroke="#000" fill="#fff"/>
 <rect id="svg_124" height="20" width="20" y="252.2" x="680" stroke="#000" fill="#fff"/>
 <rect id="svg_125" height="20" width="20" y="272.2" x="680" stroke="#000" fill="#fff"/>
 <rect id="svg_126" height="20" width="20" y="232.2" x="780" stroke="#000" fill="#fff"/>
 <rect id="svg_127" height="20" width="20" y="252.2" x="740" stroke="#000" fill="#fff"/>
 <rect id="svg_128" height="20" width="20" y="212.2" x="100" stroke="#000" fill="#fff"/>
 <rect id="svg_129" height="20" width="20" y="232.2" x="100" stroke="#000" fill="#fff"/>
 <rect id="svg_130" height="20" width="20" y="232.2" x="80" stroke="#000" fill="#fff"/>
 <rect id="svg_131" height="20" width="20" y="272.2" x="700" stroke="#000" fill="#fff"/>
 <rect id="svg_132" height="20" width="20" y="252.2" x="720" stroke="#000" fill="#fff"/>
 <rect id="svg_133" height="20" width="20" y="252.2" x="660" stroke="#000" fill="#fff"/>
 <rect id="svg_134" height="20" width="20" y="272.2" x="620" stroke="#000" fill="#fff"/>
 <rect id="svg_135" height="20" width="20" y="212.2" x="780" stroke="#000" fill="#fff"/>
 <rect id="svg_136" height="20" width="20" y="252.2" x="700" stroke="#000" fill="#fff"/>
 <rect id="svg_137" height="20" width="20" y="212.2" x="420" stroke="#000" fill="#fff"/>
 <rect id="svg_138" height="20" width="20" y="232.2" x="420" stroke="#000" fill="#fff"/>
 <rect id="svg_139" height="20" width="20" y="252.2" x="260" stroke="#000" fill="#fff"/>
 <rect id="svg_140" height="20" width="20" y="252.2" x="400" stroke="#000" fill="#fff"/>
 <rect stroke="#000" id="svg_141" height="20" width="20" y="252.2" x="620" fill="#fff"/>
 <rect id="svg_142" height="20" width="20" y="252.2" x="780" stroke="#000" fill="#fff"/>
 <rect id="svg_143" height="20" width="20" y="347.2" x="513" stroke="#000" fill="#fff"/>
 <rect id="svg_144" height="20" width="20" y="327.2" x="493" stroke="#000" fill="#fff"/>
 <rect id="svg_145" height="20" width="20" y="353.2" x="302" stroke="#000" fill="#fff"/>
 <rect id="svg_146" height="20" width="20" y="384.2" x="255" stroke="#000" fill="#fff"/>
 <rect id="svg_147" height="20" width="20" y="403.2" x="95" stroke="#000" fill="#fff"/>
 <rect id="svg_148" height="20" width="20" y="383.2" x="115" stroke="#000" fill="#fff"/>
 <rect stroke="#000" id="svg_149" height="20" width="20" y="102.2" x="118" fill="#fff"/>
 <rect stroke="#000" id="svg_150" height="20" width="20" y="139.2" x="34" fill="#fff"/>
 <rect stroke="#000" id="svg_151" height="20" width="20" y="128.2" x="681" fill="#fff"/>
 <rect stroke="#000" id="svg_152" height="20" width="20" y="410.2" x="472" fill="#fff"/>
</g>

</svg>`



const changeStuff = (svg: string): string => {
  let str = "";
  
 // str = svg.replace(/fill="#fff"/g, "fill=\"rgb(26, 26, 26)\"");
  //str = str.replace(/stroke="#000"/g, "stroke=\"rgb(26, 26, 26\"");

  str = svg.replace(/height="20"/g, "height=\"10\"");
  str = str.replace(/width="20"/g, "width=\"10\"");
  return str;
}



console.log(changeStuff(svg))
//console.log(WelcomeBits)