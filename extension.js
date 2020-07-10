// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const {
    cpuUsage
} = require('process');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

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
                result += String.fromCharCode(c);
            })

            vscode.window.showInformationMessage(result, []);
        }
        
        // const disposable = vscode.languages.registerHoverProvider(['markdown', 'plaintext'], {
        //     provideHover(document, position, token) {
        //         console.log("debug")

        //         return {
        //             contents: ['e'],
        //             range
        //         };
        //     }
        // });
    
        // context.subscriptions.push(disposable);
    });
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate
}