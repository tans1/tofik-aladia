run-cypress:
	ELECTRON_EXTRA_LAUNCH_ARGS=--remote-debugging-port=9222 pnpm dlx cypress run

run-chromatic:
	pnpm dlx chromatic --cypress --project-token=chpt_4dc45935d7403e8

build-chromatic:
	pnpm run build-storybook && npx chromatic --project-token=chpt_4dc45935d7403e8 --exit-zero-on-changes -d storybook-static/

