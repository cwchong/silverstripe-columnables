<?php
// Avoid creating global variables
call_user_func(function () {
    
    $config = SilverStripe\Forms\HTMLEditor\TinyMCEConfig::get('cms');
    $columnableResource = \SilverStripe\Core\Manifest\ModuleResourceLoader::singleton()->resolveResource('cwchong/silverstripe-columnables: client/dist/javascript/columnable/editor_plugin.js');
    $config
        ->enablePlugins([
            'columnable' => $columnableResource,
            // tinymce.enablePlugins accepts ModuleResource object instead of its unresolved path
        ]);
    $config->addButtonsToLine(2, '|', 'sscolumnables'); // , 'ssslideshowables');
});
