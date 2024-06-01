<?php
/*
Plugin Name: carrousel
Description: Description de mon extension.
Version: 1.0
Author: Votre Nom
*/
function eddym_enqueue() {
    $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    wp_enqueue_style(
        'em_plugin_carrousel_css',
        plugin_dir_url(__FILE__) . "style.css",
        array(),
        $version_css
    );

    wp_enqueue_script(
        'em_plugin_carrousel_js',
        plugin_dir_url(__FILE__) . "js/carrousel.js",
        array(),
        $version_js,
        true
    );
}
add_action('wp_enqueue_scripts', 'eddym_enqueue');

function genere_html() {
    $contenu = '
       <div class="carrousel">
        <button class="carrousel__x">X</button>
        <button class="carrousel__prev">←</button>
        <figure class="carrousel__figure"></figure>
        <button class="carrousel__next">→</button>
        <form class="carrousel__form"></form>
       </div>';
    return $contenu;
}
add_shortcode('carrousel', 'genere_html');
?>
