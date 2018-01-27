page:
	rm -rf docs
	mkdir docs
	lein uberjar
	cp -r target/cljsbuild/public/js docs
	cp -r resources/public/css docs
	cp -r resources/public/images docs
	java -jar target/website.jar static > docs/index.html

