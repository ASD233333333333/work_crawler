/**
 * 批量下載 KADOKAWA CORPORATION webエース ヤングエースUP（アップ） Webコミック 的工具。 Download YOUNG
 * ACE UP comics.
 */

'use strict';

require('../work_crawler_loader.js');

// ----------------------------------------------------------------------------

CeL.run('application.net.work_crawler.sites.ace');

// ----------------------------------------------------------------------------

var crawler = CeL.ace({
	// CeL.get_script_name()
	site : 'youngaceup'
});

// ----------------------------------------------------------------------------

// CeL.set_debug(3);

start_crawler(crawler, typeof module === 'object' && module);
