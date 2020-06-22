(function () {
  if (typeof tinymce !== 'undefined') {

    tinymce.create('tinymce.plugins.columnable', {
      getInfo: function () {
        return {
          longname: 'Columnable - UI plugin for SilverStripe',
          author: 'Chong Chee Wai',
          authorurl: 'cheewai@movingmouse.com',
          infourl: 'cheewai@movingmouse.com',
          version: "1.0"
        };
      },

      init: function (ed, url) {
        var me = tinyMCE.activeEditor.plugins.columnable;
        var imgsrc = 'https://placekitten.com/200/300';

        ed.addButton('sscolumnables', {
          title: 'Insert Columns',
          // cmd: 'cmdsstest',
          'class': 'mce_columnable',
          image: url + '/img/2box.png',
          type: 'menubutton',
          menu: [
            {
              text: "Plain",
              menu: [
                {
                  text: "2-columns",
                  onclick: function () {
                    ed.execCommand('cmdss2col');
                  }
                },
                {
                  text: "3-columns",
                  onclick: function () {
                    ed.execCommand('cmdss3col');
                  }
                }
              ]
            },
            {
              text: "Boxed",
              menu: [
                {
                  text: "1-columns",
                  onclick: function () {
                    ed.execCommand('cmdss1box');
                  }
                },
                {
                  text: "2-columns",
                  onclick: function () {
                    ed.execCommand('cmdss2box');
                  }
                },
                {
                  text: "3-columns",
                  onclick: function () {
                    ed.execCommand('cmdss3box');
                  }
                }
              ]
            },
            {
              text: "Image",
              menu: [
                {
                  text: "Image-Text",
                  onclick: function () {
                    ed.execCommand('cmdssimgtxt');
                  }
                },
                {
                  text: "Text-Image",
                  onclick: function () {
                    ed.execCommand('cmdsstxtimg');
                  }
                }
              ]
            }
          ]
        });

        ed.addCommand('cmdss2col', function (ed) {
          // jQuery('#' + this.id).entwine('ss').openShortcodeDialog(); // if using dialog; need to load js in LeftAndMain to entwine dialog contents
          // or embed using native tinymce if no data needs to be interfaced from DB: http://fiddle.tinymce.com/LIdaab
          tinymce.activeEditor.execCommand('mceInsertContent', false,
            '<div class="two-columns">' +
            '<div>' +
            '<h3>Maecenas turpis sem</h3>' +
            '<p>Donec suscipit ornare ipsum, et sagittis turpis vulputate eget. Sed semper pretium orci, quis luctus odio feugiat quis. Pellentesque efficitur nibh tortor, vel vehicula sem pulvinar non. Nam diam nunc, consectetur nec turpis sit amet, rhoncus placerat ex. Suspendisse elit eros, mattis non tempor vel, ornare sed urna. Donec tristique feugiat risus et sodales. Aenean nunc eros, faucibus et mollis a, lobortis sed massa. Curabitur in ligula ac est pharetra laoreet at a neque. Donec tincidunt varius ultricies.</p>' +
            '</div><div>' +
            '<h3>Aenean aliquam non</h3>' +
            '<p>Nam sed ullamcorper dui. Duis sed hendrerit libero. In vel erat odio. Sed ultricies mollis elit, sit amet finibus nunc pharetra ut. Vestibulum dapibus interdum ligula id vestibulum. Nulla facilisi. Donec quis ultricies diam, elementum dictum ex. Aenean urna felis, consectetur quis congue et, ultricies quis leo. Proin tincidunt felis et laoreet ultrices. Pellentesque congue est et orci accumsan, eu venenatis erat sodales. Donec bibendum tincidunt ipsum, sit amet semper nunc facilisis vulputate. Aliquam dapibus, metus at varius vulputate, mauris euismod ipsum, auctor nisi est non sapien.</p>' +
            '</div></div>');
        });

        ed.addCommand('cmdss3col', function (ed) {
          tinymce.activeEditor.execCommand('mceInsertContent', false,
            '<div class="three-columns center">' +
            '<div>' +
            '<p><img src="' + imgsrc + '" alt="img"></p>' +
            '<h3>Maecenas turpis sem</h3>' +
            '<p>Aenean aliquam non erat ut ullamcorper. Suspendisse sit amet quam ultrices, posuere enim eu, vestibulum nisi. Nam sed ullamcorper dui. Duis sed hendrerit libero. In vel erat odio. Sed ultricies mollis sit amet finibus nunc ut.</p>' +
            '</div><div>' +
            '<p><img src="' + imgsrc + '" alt="img"></p>' +
            '<h3>Aenean aliquam non</h3>' +
            '<p>Aenean aliquam non erat ut ullamcorper. Suspendisse sit amet quam ultrices, posuere enim eu, vestibulum nisi. Nam sed ullamcorper dui. Duis sed hendrerit libero. In vel erat odio. Sed ultricies mollis sit amet finibus nunc ut.</p>' +
            '</div><div>' +
            '<p><img src="' + imgsrc + '" alt="img"></p>' +
            '<h3>Aenean aliquam non</h3>' +
            '<p>Aenean aliquam non erat ut ullamcorper. Suspendisse sit amet quam ultrices, posuere enim eu, vestibulum nisi. Nam sed ullamcorper dui. Duis sed hendrerit libero. In vel erat odio. Sed ultricies mollis sit amet finibus nunc ut.</p>' +
            '</div></div>');
        });

        ed.addCommand('cmdss1box', function (ed) {
          tinymce.activeEditor.execCommand('mceInsertContent', false,
            '<div class="one-column-box">' +
            '<p>Phasellus vel ligula turpis. Proin erat purus, consequat id convallis non, ultricies elementum urna. Sed luctus augue arcu. In et fringilla purus. Nullam a feugiat leo. Sed eleifend mollis lectus, a sagittis ligula lacinia at.</p>' +
            '</div>');
        });

        ed.addCommand('cmdss2box', function (ed) {
          tinymce.activeEditor.execCommand('mceInsertContent', false,
            '<div class="two-columns-box">' +
            '<div>' +
            '<p><strong>Box Title</strong></p>' +
            '<p>Phasellus vel ligula turpis. Proin erat purus, consequat id convallis non, ultricies elementum urna. ' +
            'Sed luctus augue arcu. In et fringilla purus. Nullam a feugiat leo. Sed eleifend mollis lectus, a sagittis ligula lacinia at.</p>' +
            '</div><div>' +
            '<p>Phasellus vel ligula turpis. Proin erat purus, consequat id convallis non, ultricies elementum urna. ' +
            'Sed luctus augue arcu. In et fringilla purus. Nullam a feugiat leo. Sed eleifend mollis lectus, a sagittis ligula lacinia at.</p>' +
            '</div></div>');
        });

        ed.addCommand('cmdss3box', function (ed) {
          tinymce.activeEditor.execCommand('mceInsertContent', false,
            '<div class="three-columns-box">' +
            '<div>' +
            '<p><strong>Box Title</strong></p>' +
            '<p>Phasellus vel ligula turpis. Proin erat purus, consequat id convallis non, ultricies elementum urna. ' +
            'Sed luctus augue arcu. In et fringilla purus. Nullam a feugiat leo. Sed eleifend mollis lectus, a sagittis ligula lacinia at.</p>' +
            '</div><div>' +
            '<p>Phasellus vel ligula turpis. Proin erat purus, consequat id convallis non, ultricies elementum urna. ' +
            'Sed luctus augue arcu. In et fringilla purus. Nullam a feugiat leo. Sed eleifend mollis lectus, a sagittis ligula lacinia at.</p>' +
            '</div><div>' +
            '<p>Phasellus vel ligula turpis. Proin erat purus, consequat id convallis non, ultricies elementum urna. ' +
            'Sed luctus augue arcu. In et fringilla purus. Nullam a feugiat leo. Sed eleifend mollis lectus, a sagittis ligula lacinia at.</p>' +
            '</div></div>');
        });

        ed.addCommand('cmdssimgtxt', function (ed) {
          tinymce.activeEditor.execCommand('mceInsertContent', false,
            '<div class="img_text_layout">' +
            '<div>' +
            '<p><img src="' + imgsrc + '" alt="img"></p>' +
            '</div><div>' +
            '<p>Donec suscipit ornare ipsum, et sagittis turpis vulputate eget. Sed semper pretium orci, quis luctus odio feugiat quis. Pellentesque efficitur nibh tortor, vel vehicula sem pulvinar non. Nam diam nunc, consectetur nec turpis sit amet, rhoncus placerat ex. Suspendisse elit eros, mattis non tempor vel, ornare sed urna. Donec tristique feugiat risus et sodales. Aenean nunc eros, faucibus et mollis a, lobortis sed massa. Curabitur in ligula ac est pharetra laoreet at a neque. Donec tincidunt varius ultricies.</p>' +
            '</div></div>');
        });

        ed.addCommand('cmdsstxtimg', function (ed) {
          tinymce.activeEditor.execCommand('mceInsertContent', false,
            '<div class="text_img_layout">' +
            '<div>' +
            '<p><img src="' + imgsrc + '" alt="img"></p>' +
            '</div><div>' +
            '<p>Donec suscipit ornare ipsum, et sagittis turpis vulputate eget. Sed semper pretium orci, quis luctus odio feugiat quis. Pellentesque efficitur nibh tortor, vel vehicula sem pulvinar non. Nam diam nunc, consectetur nec turpis sit amet, rhoncus placerat ex. Suspendisse elit eros, mattis non tempor vel, ornare sed urna. Donec tristique feugiat risus et sodales. Aenean nunc eros, faucibus et mollis a, lobortis sed massa. Curabitur in ligula ac est pharetra laoreet at a neque. Donec tincidunt varius ultricies.</p>' +
            '</div></div>');
        });

        ed.addCommand('cmdssregtab', function (ed) {
          tinymce.activeEditor.execCommand('mceInsertContent', false,
            '<div class="col2 form-tabs">' +
            '<div>' +
            '<p><a href="#">Link 1</a></p>' +
            '</div><div>' +
            '<p><a href="#">Link 2</a></p>' +
            '</div></div>');
        });

        ed.addCommand('cmdssregcost', function (ed) {
          tinymce.activeEditor.execCommand('mceInsertContent', false,
            '<div class="col2 cost-box">' +
            '<div>' +
            '<p><strong>Table</strong></p>' +
            '<table>' +
            '<tr><td>11</td><td>22</td></tr>' +
            '<tr><td>11</td><td>22</td></tr>' +
            '<tr><td>11</td><td>22</td></tr>' +
            '</table>' +
            '</div><div>' +
            '<p><strong>Table</strong></p>' +
            '<table>' +
            '<tr><td>11</td><td>22</td></tr>' +
            '<tr><td>11</td><td>22</td></tr>' +
            '<tr><td>11</td><td>22</td></tr>' +
            '</table>' +
            '</div></div>');
        });

        // allow cntrl+enter to create empty paragraph outside our div tag
        ed.on("keydown", function (e) {
          // Capture CTRL+Enter
          if (((e.keyCode == 13) || (e.keyCode == 10)) && (e.ctrlKey == true)) {
            var dom = ed.dom;

            var parents = dom.getParents(ed.selection.getNode());
            for (var i = 0; i < parents.length; i++) {
              currentNode = parents[i];
              // Insert empty paragraph at the end of the parent of the outermost div consecutive tag
              if (currentNode.nodeName == 'DIV' && ((i == parents.length - 1) || parents[i + 1].nodeName != 'DIV')) {
                // dom.insertAfter doesn't work reliably
                var uniqueID = dom.uniqueId();
                // dom.uniqueId() is only guaranteed unique in session, need to find if exists in editor:
                var curEl = dom.get(uniqueID);
                while (curEl !== null) {
                  uniqueID = dom.uniqueId();
                  curEl = dom.get(uniqueID);
                }
                jQuery('<p id="' + uniqueID + '">&nbsp;</p>').insertAfter(currentNode);

                // Move to the new node
                var newParagraph = dom.select('p#' + uniqueID)[0];
                ed.selection.setCursorLocation(newParagraph);
                // remove generated id
                dom.setAttrib(uniqueID, 'id', '');

                // Don't create an extra paragraph
                e.preventDefault();
                break;
              }
            }
          }
          // Capture delete on internal divs
          else if (e.keyCode == 8 || e.keyCode == 46) {
            try {
              var elem = ed.selection.getNode().parentNode,
                elem2 = elem.parentNode,
                elem3 = elem2.parentNode; //current caret node
              if (elem.nodeName == 'P' && elem2.nodeName == 'DIV'
                && elem3.nodeName == 'DIV'
                && (elem3.classList.contains("two_columns") || elem3.classList.contains("three_columns") || elem3.classList.contains("two_columns_box") || elem3.classList.contains("three_columns_box"))
              ) {
                if (elem.textContent.length == 0) {
                  ed.selection.getNode().remove();
                  elem.innerHTML = '&nbsp;';
                  e.preventDefault();
                  return false;
                }
              }
            } catch (e) { }
          }
        });

        // On load replace shorcode with placeholder.
        /* xxx not needed
        ed.onLoadContent.add(function (ed, o) {
            var newContent = me.replaceShortcodesWithPlaceholders(o.content, ed);
            ed.execCommand('mceSetContent', false, newContent, false);
        });
        */

        /* xxx not needed
        ed.onDblClick.add(function (ed, e) {
            var dom = ed.dom, node = e.target;
            if (node.nodeName === 'IMG' && dom.hasClass(node, 'shortcode-placeholder') && e.button !== 2) {
                ed.execCommand('shortcodable');
            }
        });
        */
      },

      // replace shortcode strings with placeholder images
      replaceShortcodesWithPlaceholders: function (content, editor) {
        var plugin = tinyMCE.activeEditor.plugins.shortcodable;
        var placeholderClasses = jQuery('#' + editor.id).entwine('ss').getPlaceholderClasses();

        if (placeholderClasses) {
          return content.replace(/\[([a-z_]+)\s*([^\]]*)\]/gi, function (found, name, params) {
            var id = plugin.getAttribute(params, 'id');
            if (placeholderClasses.indexOf(name) != -1) {
              var src = encodeURI('admin/shortcodable/shortcodePlaceHolder/' + name + '/' + id + '?Shortcode=[' + name + ' ' + params + ']');
              var img = jQuery('<img/>')
                .attr('class', 'shortcode-placeholder mceItem')
                .attr('title', name + ' ' + params)
                .attr('src', src);
              return img.prop('outerHTML');
            }

            return found;
          });
        } else {
          return content;
        }
      },

      // replace placeholder tags with shortcodes
      replacePlaceholdersWithShortcodes: function (co) {
        var content = jQuery(co);
        content.find('.shortcode-placeholder').each(function () {
          var el = jQuery(this);
          var shortCode = '[' + tinymce.trim(el.attr('title')) + ']';
          el.replaceWith(shortCode);
        });
        var originalContent = '';
        content.each(function () {
          if (this.outerHTML !== undefined) {
            originalContent += this.outerHTML;
          }
        });
        return originalContent;
      },

      // get an attribute from a shortcode string by it's key
      getAttribute: function (string, key) {
        var attr = new RegExp(key + '=\"([^\"]+)\"', 'g').exec(string);
        return attr ? tinymce.DOM.decode(attr[1]) : '';
      }
    });

    // Adds the plugin class to the list of available TinyMCE plugins
    tinymce.PluginManager.add("columnable", tinymce.plugins.columnable);
  }
})();