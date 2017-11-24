$(function () {
    var $sidebarToggle=$('<button id="sidebar-toggle" class="sidebar-toggle"><div class="sidebar-toggle-button"><span></span><span></span><span></span></div></button>');
    $('body').append($sidebarToggle);
    var $sidebarToggleButton = $sidebarToggle.find('.sidebar-toggle-button');
    $tableOfContents=$('#table-of-contents');
    $tableOfContents.addClass('sidebar').prependTo($('body'));
    var $sidebarNav = $('#text-table-of-contents');
    $sidebarNav.addClass('sidebar-nav');

    $sidebarNav.find('li a').addClass('section-link');
    $sidebarNav.find('li ul').addClass('children');

    $('body').append('<div id="main-content"></div>');
    var $mainContent = $('#main-content');
    var outestIds = ['table-of-contents','main-content','sidebar-toggle'];
    $('body').children().each(function () {
        var id = $(this).attr('id');
        if(outestIds.indexOf(id)==-1) {
            $(this).appendTo($mainContent);
        }
    });

    //显示与隐藏
    $sidebarToggleButton.bind('click',function () {
        if($tableOfContents.is(":hidden")) {
            $tableOfContents.show();
            $mainContent.css('left','300px');
            $('body').removeClass('close');
        }else {
            $tableOfContents.hide();
            $mainContent.css('left','0px');
            $('body').addClass('close');
        }
    });

    //选中
    $sidebarNav.find('li').bind('click',function () {
        $sidebarNav.find('li').removeClass('active');
        $(this).addClass('active');
    });

    //标题
    $tableOfContents.children().first().text($('#content').children().first().text());

    // the end
})
