# Machine Intelligence Lab website

Production: https://milab-inha.github.io/

Approved November 13, 2026. Static HTML, CSS and JavaScript with locally hosted Source Sans 3 fonts.
The source branch is `master`; GitHub Actions publishes it to `gh-pages`.

The local build source is `bauhaus-site/build.py` and `bauhaus-site/src/` in the managed lab website workspace.
Run `python3 bauhaus-site/build.py` for the local no-index preview or add `--production` for production metadata and legacy routes.
The retained `preview-site/production-ready/` directory supplies the content and downloads used by this redesign.
Building locally does not publish. Deploy only the generated `bauhaus-site/production-ready/` package after approval.

All previous downloads and legacy page redirects remain available. The CV, course flyers, bibliography, member photos and group photo are preserved.
The homepage figure is an illustrative analytic Gaussian-mixture conditioning diagram, not an experimental result.
Research project figure attribution and license information remain in the retained source and the linked project pages.

The previous source and published site are retained on the `backup/pre-minimal-redesign-2026-11-13-source` and `backup/pre-minimal-redesign-2026-11-13-published` branches, with local archives in the managed workspace.
Earlier backup branches and local backups are retained.
