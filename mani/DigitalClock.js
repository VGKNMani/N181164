function SystemTime()
{
    var d=new Date();
    var hh=d.getHours();
    var mm=d.getMinutes();
    var ss=d.getSeconds();
    var session="AM";
    if(hh>12)
        hh=hh-12;
        session="PM";
    if(hh==0)
        hh=12;
    hh=(hh<10) ? "0"+hh:hh;
    mm=(mm<10)?"0"+mm:mm;
    ss=(ss<10)?"0"+ss:ss;

    var time=(hh+":"+mm+":"+ss+" "+session);
    document.getElementById("clock").innerText=time;

    setTimeout(function(){
        SystemTime()
    },1000)
}
SystemTime();