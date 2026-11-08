// 素材地址和网址参数。
// 直接打开（本地服务器、GitHub Pages）时用相对路径；
// 通过 htmlpreview.github.io 打开时，相对路径会指向 htmlpreview 自己，改从 raw.githubusercontent.com 读（允许跨域）。
function resolveBase() {

	if ( location.hostname === 'htmlpreview.github.io' ) {

		const m = decodeURIComponent( location.search ).match( /github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.*\/)[^/]*$/ );
		if ( m ) return `https://raw.githubusercontent.com/${ m[ 1 ] }/${ m[ 2 ] }/${ m[ 3 ] }/${ m[ 4 ] }`;

	}

	return './';

}

export const BASE = resolveBase();
export const asset = ( name ) => BASE + 'assets/' + name;

// htmlpreview 下 location.search 形如“?https://…/index.html?q=low”，取最后一个“.html?”后面的部分
function queryString() {

	const s = location.search;
	const i = s.lastIndexOf( '.html?' );
	return i >= 0 ? s.slice( i + 6 ) : s;

}

export const PARAMS = new URLSearchParams( queryString() );
