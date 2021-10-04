(function($){
	
	$.fn.scrollSections = function(){
		console.log("dddd");
		this.each(function(){
			let $menu = $(this);
			$menu.find('a[href^="#"]').on('click', function(e){
				e.preventDefault();
				let start = $(window).scrollTop();
				let end = $($(this).attr('href')).offset().top - 64;
				let delta = Math.abs(start - end);
				$('html, body').animate({
					scrollTop: end
				}, delta / 3);
			});
			
			// let $span = $menu.before('<span class="active-line">').prev();
			
			$(window).on('scroll', function(){
				$('menu .active').removeClass('active');
				let $activeLink = $menu.find('a[href^="#"]:last');
				let current = $(window).scrollTop() + 64;
				let offsetBottom = $('body').outerHeight() - current - $(window).height();
				if (offsetBottom > 100)
					$menu.find('a[href^="#"]').each(function(){
						let $section = $($(this).attr('href'));
						let start = $section.offset().top;
						let end = start + $section.outerHeight();
						if (current >= start && current < end) $activeLink = $(this);
					});
				$activeLink.parents('li').eq(0).addClass('active');
				
				// $span.css({
				// 	left: $activeLink.offset().left - 16 + 'px',
				// 	width: $activeLink.outerWidth() + 32 + 'px'
				// });
				
				
			}).trigger('scroll');
			
		});
		
		return this;
	};
	
})(jQuery);

