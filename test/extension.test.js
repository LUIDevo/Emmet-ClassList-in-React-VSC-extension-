import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.insertClassName', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const wordRange = document.getWordRangeAtPosition(selection.start);
            const className = document.getText(wordRange);
            const position = selection.start;

            editor.edit(editBuilder => {
                editBuilder.insert(position, `className="${className}"`);
            });
        }
    });

    context.subscriptions.push(disposable);
}
