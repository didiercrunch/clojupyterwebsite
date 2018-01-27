page:
	rm -rf docs
	mkdir docs
	lein cljsbuild once
	cp -r target/cljsbuild/public/js docs
	lein sass4clj once
	cp -r resources/public/css docs
	cp -r resources/public/images docs
	lein run static > docs/index.html

