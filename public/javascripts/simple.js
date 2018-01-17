$(document).ready(function() {
    const ANGLE = 45;

    let wowpanels = document.querySelectorAll(".login-page");
    let colors = ['#4975FB', '#924DE6', '#EF5252', '#F59500'];
    let default_color = '#EEE2DF';

    wowpanels.forEach((element, i) => {
        floatable(element, default_color);
    });

    function floatable(panel, color) {
        let content = panel.querySelector(".login-content");
        content.style.backgroundColor = color;

        panel.addEventListener('mouseout', e => {
            content.style.transform = `perspective(1000px) 
    								   rotateY(0deg)
    								   rotateX(0deg)`;
        });

        panel.addEventListener('mousemove', e => {
            let w = panel.clientWidth;
            let h = panel.clientHeight;
            let y = (e.offsetX - w * 0.5) / w * ANGLE;
            let x = (1 - (e.offsetY - h * 0.5)) / h * ANGLE;

            content.style.transform = `perspective(1000px) 
    								   rotateX(${x}deg)
    								   rotateY(${y}deg)`;
        });
    }

    var repl_img = 'main-badge';
    var repl_bk = 'main-content';

    $('#loginbtn').click(function() {
        $('.' + repl_bk).load('/web/main.html');
        $('.' + repl_bk).delay(800).fadeIn(400).css('display', 'block');
    });

    $.getScript("/javascripts/bg-particle.js");

});

$(document).on('click', '#go_sched', function(e) {
    e.preventDefault();
    $.ajax({
        url: "http://localhost:3000/query/query"
    }).done(function(data) {
        data = data.data;
        var mymodal = $('#modal_sched');
        var modal_body = mymodal.find('#modal-body1');
        for (var eleloop in data) {
            modal_body.append(pansad(data[eleloop]))
        }
        // 印全部
        //mymodal.find('.modal-body').text(JSON.stringify(data));
        mymodal.modal('show');
        console.log("講座成功");
        console.dir(data);
    });
});

function pansad(element) {
    var template = `<table class="table">
	<table class="tg">
		<tr>
			<td class="tg-mejs">Orientatoin</td>
			<th class="tg-yw4l">%or%</th>
		</tr>
		<tr>
			<td class="tg-4m52">Seccions_name</td>
			<th class="tg-yw4l">%sname%</th>
		</tr>
		<tr>
			<td class="tg-9w8p">Date</td>
			<th class="tg-yw4l">%date%</th>
		</tr>
		<tr>
			<td class="tg-f1iz">Site</td>
			<th class="tg-yw4l">%site%</th>
		</tr>
		<tr>
			<td class="tg-nfgs">Remain</td>
			<th class="tg-yw4l">%remain%</th>
		</tr>
		<tr>
			<td class="tg-x0yd">Detail</td>
			<th class="tg-yw4l"><a href="%detail%" target="_blank">詳情請點我</a></th>
		</tr>
	</table>
	`
    return template.replace('%or%', element.orientation)
        .replace('%sname%', element.seccions_name)
        .replace('%date%', element.date)
        .replace('%site%', element.site)
        .replace('%remain%', element.remain)
        .replace('%detail%', element.detail);
}