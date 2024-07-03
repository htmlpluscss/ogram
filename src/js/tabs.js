( tabs => {

	if ( tabs.length > 0 ) {

		[...tabs].forEach( tab => {

			const nav = tab.querySelectorAll('.tabs__btn'),
				  item = tab.querySelectorAll('.tabs__item');

			[...nav].forEach( btn => {

				btn.addEventListener('click', () => {

					[...nav].forEach( (el,index) => {

						el.classList.toggle('is-active', el === btn);
						item[index].classList.toggle('hide', el !== btn);

					});

				});

			});

		});

	}

})(document.querySelectorAll('.tabs'));