APP_NAME = tendrils
ARGS = 
runner = npm run gulp

help:
	@echo "tendrils"
	@echo ""
	@echo "The following commands are available:"
	@echo ""
	@echo "\tmake setup - Installs node dependencies and requisites for build"
	@echo "\tmake watch - Triggers gulp to watch and build files"
	@echo "\tmake <TASK> - Triggers specified task, e.g. 'make build'"
	@echo ""

default: help

# This allows any of the gulp commands to be called, e.g. `make scripts`
assets build custom-deps html images jscs lint scripts server styles test watch: node_modules/.bin
	npm run gulp -- $@ $(ARGS);

# A full minified build
dist:
	make build ARGS=--is-production

# Just install node_modules, also callable as `make node_modules`
setup: node_modules/.bin

# This only runs if the modification date of `package.json` is more recent
# than the modification date of `node_modules`, `touch $@` updates the
# modification date of `node_modules` when done.
node_modules/.bin: package.json
	npm config set progress=false;
	npm cache clean;
	npm install;
	touch $@;

# Convenience: merge whatever's on `develop` branch into `gh-pages` and push it.
# Before doing this, make sure you've got a clean `git` stage, and you're not
# running any build tasks...
gh-pages:
	$(eval BRANCH := `git rev-parse --abbrev-ref HEAD`)
	@echo "Switching to 'gh-pages' from '$(BRANCH)'"
	git checkout gh-pages
    git fetch origin develop
    git merge FETCH_HEAD
    make dist
    git add -f build
    git commit
    git push
	git checkout $(BRANCH)

# makefile ettiquette; mark rules without on-disk targets as PHONY
.PHONY: default help setup assets build custom-deps html images jscs lint scripts server styles test watch gh-pages
