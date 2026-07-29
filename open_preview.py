import webbrowser
import os

local_path = os.path.abspath(r'D:\AxhubMake\20260711-TLJ-GWM-B-Web\tlj-gwm-b-web\prototype\gmw_web_index.html')
local_url = 'file:///' + local_path.replace('\\', '/')
online_url = 'https://4ac43339aa8140cbbebd6ca69531a003.app.codebuddy.work'

print('Opening local preview:', local_url)
webbrowser.open(local_url, new=2)

print('Opening online preview:', online_url)
webbrowser.open(online_url, new=2)

print('Done - both previews opened in browser')
