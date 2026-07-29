#!/usr/bin/env python3
"""Update sidebar menus in index.html and all existing prototype pages
to link to the 14 new pages using openMenuTab() instead of onMenuClick(this, false)."""

import re
import os

# Mapping: menu text -> (html_file, tab_id)
MENU_MAP = {
    '权益车辆': ('gmw_web_equity_vehicle.html', 'equity_vehicle'),
    '车型配置': ('gmw_web_model_config.html', 'model_config'),
    '预投记录': ('gmw_web_pre_insurance.html', 'pre_insurance'),
    '投保记录': ('gmw_web_insurance_record.html', 'insurance_record'),
    '异常记录': ('gmw_web_exception_record.html', 'exception_record'),
    '享权记录': ('gmw_web_enjoyment_record.html', 'enjoyment_record'),
    '享权说明': ('gmw_web_enjoyment_desc.html', 'enjoyment_desc'),
    '数据存证': ('gmw_web_data_evidence.html', 'data_evidence'),
    '报告存证': ('gmw_web_report_evidence.html', 'report_evidence'),
    '数据校验': ('gmw_web_data_verify.html', 'data_verify'),
    '模型管理': ('gmw_web_model_manage.html', 'model_manage'),
    '用户管理': ('gmw_web_user_manage.html', 'user_manage'),
    '角色权限': ('gmw_web_role_permission.html', 'role_permission'),
    '日志管理': ('gmw_web_log_management.html', 'log_management'),
}

# Files to update (index + existing pages that have the old sidebar)
FILES_TO_UPDATE = [
    'gmw_web_index.html',
    'gmw_web_application.html',
    'gmw_web_dashboard.html',
    'gmw_web_export.html',
    'gmw_web_policy.html',
    'gmw_web_download.html',
    'gmw_web_poster.html',
    'gmw_web_return.html',
    'gmw_web_abnormal_workorder.html',
    'gmw_web_agreement_policy.html',
]

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    changed = False
    for menu_text, (html_file, tab_id) in MENU_MAP.items():
        # Pattern: onMenuClick(this, false) ... <span>MENU_TEXT</span>
        # We need to replace onMenuClick(this, false) with openMenuTab(this, 'title', 'file', 'tabId')
        # But only for the menu item that contains <span>MENU_TEXT</span>
        
        # Find the pattern: onclick="return onMenuClick(this, false)" followed by SVG and <span>MENU_TEXT</span>
        # The onclick and the span are in the same <a> tag
        old_pattern = f'onclick="return onMenuClick(this, false)"'
        
        # We need to find occurrences where the following <span> contains our menu_text
        # Strategy: find each onMenuClick(this, false), then check if the next <span> matches
        
        # Simple approach: replace onMenuClick(this, false) with openMenuTab only when
        # the same <a> tag contains <span>MENU_TEXT</span>
        
        # Find all occurrences of onMenuClick(this, false)
        idx = 0
        while True:
            pos = content.find(old_pattern, idx)
            if pos == -1:
                break
            
            # Check if this <a> tag contains our menu_text
            # Look for <span>MENU_TEXT</span> within the next 500 chars
            search_region = content[pos:pos+500]
            span_pattern = f'<span>{menu_text}</span>'
            
            if span_pattern in search_region:
                # Replace this occurrence
                new_call = f"onclick=\"return openMenuTab(this, '{menu_text}', '{html_file}', '{tab_id}')\""
                content = content[:pos] + new_call + content[pos+len(old_pattern):]
                changed = True
                print(f"  Replaced: {menu_text} -> openMenuTab(... '{html_file}')")
                # Don't advance idx since content changed length
                idx = pos + len(new_call)
            else:
                idx = pos + len(old_pattern)
    
    if changed:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
    
    return changed

def main():
    prototype_dir = os.path.dirname(os.path.abspath(__file__))
    
    for filename in FILES_TO_UPDATE:
        filepath = os.path.join(prototype_dir, filename)
        if not os.path.exists(filepath):
            print(f"SKIP (not found): {filename}")
            continue
        
        print(f"\nProcessing: {filename}")
        changed = update_file(filepath)
        if changed:
            print(f"  -> Updated successfully")
        else:
            print(f"  -> No changes needed")

if __name__ == '__main__':
    main()
