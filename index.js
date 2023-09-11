var time=0;
var span_num=0;
var first = true;
team=$(".team > span").length
year=$(".year > span").length

/* var intervalId = setInterval(function () {
  if (first) {
    typing(team,".team");
  } else {
    typing(year,".year");
  }
  first=!first
},4000); */

for(var i=0;i<100;i++)
{
    typing(team,".team");
    typing(year,".year");
}

setTimeout(function() {
    $("span").addClass("display");
  }, time+100);

function typing(number_of_items,item)
{
    span_num=0;
    for(var i=0;i<(number_of_items*2);i++)
    {
        if(i<number_of_items)
        {
            setTimeout(type,time,item);
        }

        else
        {
            setTimeout(untype,time,item);
        }

        time+=100;
    }
    
    if(first)
    {
        setTimeout(function() {
            $(".team, .year").addClass("push");
          }, time+100);
        first=false;
    }
    
    else
    {
        setTimeout(function() {
            $(".team, .year").removeClass("push");
          }, time+100);
      first=true;
    }
}


function type(item)
{
    document.querySelectorAll(item+" > span")[span_num].classList.add("display");
    span_num++;
}

function untype(item)
{
    span_num--;
    document.querySelectorAll(item+" > span")[span_num].classList.remove("display");
}