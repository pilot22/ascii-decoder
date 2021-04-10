const vscode = require('vscode');

function isInt(n) {
    return /^[+-]?\d+$/.test(n);
}

function activate(context) {
    vscode.window.onDidChangeTextEditorSelection(() => {
        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        var selection = editor.selection;
        var text = editor.document.getText(selection);
        var lastchar = text[text.length - 1];

        if (text.startsWith("\\") && isInt(lastchar)) {
            var chars = text.split("\\").slice(1)
            let result = ""

            chars.forEach(c => {
                result += String.fromCharCode(c);
            })

            vscode.window.showInformationMessage(result, []);
        } else {
            var chaars = text.match(/(\\)\w+/g);
            if (chaars.length <= 0) return;

            var chars = chaars.join("").split("\\").slice(1);
            if (chars.length <= 0) return e;

            let result = ""
            
            chars.forEach(c => {
                //implement if not isInt() continue
                result += String.fromCharCode(c);
            })

            vscode.window.showInformationMessage(result, []);
        }
        
    });
}
exports.activate = activate;

function deactivate() {}

module.exports = {
    activate,
    deactivate
}
