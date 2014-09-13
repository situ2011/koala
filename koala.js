/*
 * desc: simple javascript tools for fe developers, base on nothing
 * email: gao_st@126.com
 * since: 2013-09-21
 */
!function ( window, document, undefined ) {
	var koala = {
		version: 0.8,
		author: 'situ',
		email: 'gao_st@126.com',
		toString: function () {
			return 'Need support? mail to gao_st@126.com';
		},
		id: function ( id ) {
			return typeof id === 'string' ? document.getElementById( id ) : id; 
		},
		cls: function ( className, context ) {
			var nList, i = 0, len, rList = [];
			if ( document.getElementsByClassName ) {
				return ( context || document ).getElementsByClassName( className );
			} else {
				nList = ( context || document ).getElementsByTagName( '*' );
				for ( len = nList.length; i<len; i++ ) {
					if ( nList[i].className.indexOf( className ) > -1 ) {
						rList.push( nList[i] );
					}
				}
				return rList;
			}
		},
		attr: function ( attribute, context ) {
			var nList, i = 0, len, rList = [];
			nList = ( context || document ).getElementsByTagName( '*' );
			for ( len = nList.length; i<len; i++ ) {
				if ( nList[i].getAttribute( attribute ) ) {
					rList.push( nList[i] );
				}
			}
			return rList;
		}
	};
	window.kl = window.koala = koala;
} ( window, document );

/*
 * Auto fix some bugs, unsupports, etc...
 */
!function ( window, document, undefined ) {
	!function fixPlaceholder () {
		var target, i=0, len, tmpPh;
		if ( 'placeholder' in document.createElement('input') ) return;
		target = kl.attr( 'placeholder' );
		for ( len = target.length; i<len; i++ ) {
			tmpPh = target[i].getAttribute( 'placeholder' );
			target[i].value = tmpPh;
			target[i].style.color = '#aaaaaa';
			target[i].onfocus = function () {
				this.value = '';
				this.style.color = '#000000';
			}
			target[i].onblur = function () {
				this.value = this.getAttribute( 'placeholder' );
				this.style.color = '#aaaaaa';
			}
		}

	}();
} ( window, document );