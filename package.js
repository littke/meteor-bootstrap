Package.describe({
  summary: "Bootstrap from Twitter, custom packaged to allow individual JS files to be selected and to use mixins from the less files."
});

Package.on_use(function (api) {
  api.add_files('js/bootstrap-dropdown.js', 'client');
  api.add_files('js/bootstrap-tooltip.js', 'client');
  api.add_files('js/bootstrap-collapse.js', 'client');
  api.add_files('js/bootstrap-alert.js', 'client');
  api.add_files('js/bootstrap-typeahead.js', 'client');
  api.add_files('js/bootstrap-affix.js', 'client');
});
