$(document).on('click', '#go_realt', function(e) {
    e.preventDefault();
    $.ajax({
        url: "http://127.0.0.1:1377/query/query2"
    }).done(function(apple) {
        apple = apple.data;
        var myrealt = $('#modal_realt');
        var modal_body = myrealt.find('#modal-body2');
        for (var eleloop in apple) {
            modal_body.append(panhappy(apple[eleloop]))
        }
        // 印全部
        //myrealt.find('.modal-body').text(JSON.stringify(apple));
        myrealt.modal('show');
        console.log("即時成功");
        console.dir(apple);
    });
});

function panhappy(banana) {
    var cat = `
    <table cellspacing="0" cellpadding="0">
        <tbody>
            <tr>
                <td>TIME</td>
                <td>%date%</td>
            </tr>
            <tr>
                <td>LOCATION</td>
                <td>%department%</td>
            </tr>
            <tr>
                <td>REMAINS</td>
                <td>%amount%</td>
            </tr>
            <tr>
        </tbody>
    </table>
    `
    return cat.replace('%date%', banana.date + " " + banana.range)
        .replace('%department%', banana.department)
        .replace('%amount%', banana.amount)
}

//<img src="http://album.udn.com/community/img/PSN_PHOTO/maggieshiba/f_4699114_1.jpg" style="display: block;"></img>
