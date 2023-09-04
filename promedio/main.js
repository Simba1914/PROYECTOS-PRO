br1=prompt("digite el primer marcador de broncos");
ptr1=prompt("digite el primer marcador de patriots");
br2=prompt("digite el segundo marcador de broncos");
ptr2=prompt("digite el segundo marcador de patriots");
br3=prompt("digite el tercero marcador de broncos");
ptr3=prompt("digite el tercero marcador de patriots");
promediobroncos=(br1+br2+br3)/3;
promediopatrio=(ptr1+ptr2+ptr3)/3;


if(promediobroncos>promediopatrio){
    alert( " Con " + promediobroncos + " broncos Es el ganador de la serie");
}else{
    alert(" Con " + promediopatrio + " patriots es el ganador de la serie");
}


23
