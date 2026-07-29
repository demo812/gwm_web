// ===== 模拟数据 =====
// ===== 菜单导航（独立页面模式） =====
// 注：index.html 的 inline <script> 会覆盖这些函数实现 iframe Tab 模式

// onMenuClick：处理 onMenuClick(this, true/false) 模式
// true  = 全页跳转到 href 目标
// false = 无操作（禁用菜单项）
function onMenuClick(el, navigate) {
    var e = event || window.event;
    if (e && e.preventDefault) e.preventDefault();
    if (!navigate) return false; // 禁用项，不跳转
    var href = el.getAttribute('href');
    if (href && href !== '#') {
        window.location.href = href;
    }
    return false;
}

// openMenuTab：处理 openMenuTab(this, title, url, tabId) 模式
function openMenuTab(el, title, url, tabId) {
    var e = event || window.event;
    if (e && e.preventDefault) e.preventDefault();
    // 独立模式：直接跳转到目标页面
    window.location.href = url;
    return false;
}
const mockData = [
    { id: 'CCHSMVIC2025052819030001', vin: 'LGW6SETLF53009138', brand: 'WEY', series: 'M83', model: 'WEY M83', owner: '张三', phone: '13248223139', plate: '沪A D12345', source: '智选实销', accidentTime: '2025/5/21 11:39:31', injury: '是', scratch: '是', shopId: '723042', shop: '长城智选（海口）秀英狮子岭用户服务中心', mainStatus: '进行中', subStatus: '申请已提交', acceptStatus: '', acceptor: '', dataFetchStatus: '', provider: '上海汽检', reportStatus: '', smartDriveFeature: 'ACC', rejectReason: '', supplementDesc: 'xxxxxxxx', claimStatus: '', payStatus: '', claimAmount: '', claimDetail: '', createTime: '2025/5/21 11:40:26', completeTime: '', updateTime: '', status: 'submitted' },
    { id: 'CCHSMVIC2025052819030002', vin: 'LGW6SETLF53009139', brand: 'WEY', series: 'M83', model: 'WEY M83', owner: '张三', phone: '13248223139', plate: '沪A D12345', source: '经销商实销', accidentTime: '2025/5/21 11:39:31', injury: '否', scratch: '是', shopId: '723042', shop: '长城智选（海口）秀英狮子岭用户服务中心', mainStatus: '进行中', subStatus: '申请已受理', acceptStatus: '通过', acceptor: '张三丰', dataFetchStatus: '', provider: '上海汽检', reportStatus: '', smartDriveFeature: 'ICC', rejectReason: '', supplementDesc: '', claimStatus: '', payStatus: '', claimAmount: '', claimDetail: '', createTime: '2025/5/21 11:40:26', completeTime: '2025/5/21 11:41:15', updateTime: '2025/5/21 11:41:15', status: 'accepted' },
    { id: 'CCHSMVIC2025052819030003', vin: 'LGW6SETLF53009140', brand: 'WEY', series: 'M83', model: 'WEY M83', owner: '张三', phone: '13248223139', plate: '沪A D12345', source: '经销商实销', accidentTime: '2025/5/21 11:39:31', injury: '否', scratch: '是', shopId: '723042', shop: '长城智选（海口）秀英狮子岭用户服务中心', mainStatus: '进行中', subStatus: '申请已受理', acceptStatus: '通过', acceptor: '张三丰', dataFetchStatus: '成功', provider: '国创中心', reportStatus: '待盖章', smartDriveFeature: 'APA', rejectReason: '', supplementDesc: 'xxxxxxxx', claimStatus: '', payStatus: '', claimAmount: '', claimDetail: '', createTime: '2025/5/21 11:40:26', completeTime: '2025/5/21 11:41:15', updateTime: '2025/5/21 11:41:15', status: 'accepted' },
    { id: 'CCHSMVIC2025052819030004', vin: 'LGW6SETLF53009141', brand: 'WEY', series: 'M83', model: 'WEY M83', owner: '张三', phone: '13248223139', plate: '沪A D12345', source: '智选实销', accidentTime: '2025/5/21 11:39:31', injury: '是', scratch: '是', shopId: '723042', shop: '长城智选（海口）秀英狮子岭用户服务中心', mainStatus: '已完成', subStatus: '申请未通过', acceptStatus: '驳回', acceptor: '张三丰', dataFetchStatus: '', provider: '国创中心', reportStatus: '', smartDriveFeature: 'NOA-C', rejectReason: '行驶证为营运性质，不符合保障范围', supplementDesc: '', claimStatus: '', payStatus: '', claimAmount: '', claimDetail: '', createTime: '2025/5/21 11:40:26', completeTime: '2025/5/21 11:41:15', updateTime: '2025/5/21 11:41:15', status: 'rejected' },
    { id: 'CCHSMVIC2025052819030005', vin: 'LGW6SETLF53009142', brand: 'WEY', series: 'M83', model: 'WEY M83', owner: '张三', phone: '13248223139', plate: '沪A D12345', source: '智选实销', accidentTime: '2025/5/21 11:39:31', injury: '是', scratch: '是', shopId: '723042', shop: '长城智选（海口）秀英狮子岭用户服务中心', mainStatus: '已完成', subStatus: '申请未通过', acceptStatus: '通过', acceptor: '张三丰', dataFetchStatus: '失败', provider: '上海汽检', reportStatus: '', smartDriveFeature: 'RPA', rejectReason: '系统未检测到事故时刻的车辆辅助驾驶相关数据', supplementDesc: '', claimStatus: '', payStatus: '', claimAmount: '', claimDetail: '', createTime: '2025/5/21 11:40:26', completeTime: '2025/5/21 11:41:15', updateTime: '2025/5/21 11:41:15', status: 'rejected' },
    { id: 'CCHSMVIC2025052819030006', vin: 'LGW6SETLF53009143', brand: 'WEY', series: 'M83', model: 'WEY M83', owner: '张三', phone: '13248223139', plate: '沪A D12345', source: '智选实销', accidentTime: '2025/5/21 11:39:31', injury: '是', scratch: '是', shopId: '723042', shop: '长城智选（海口）秀英狮子岭用户服务中心', mainStatus: '已完成', subStatus: '申请未通过', acceptStatus: '通过', acceptor: '张三丰', dataFetchStatus: '成功', provider: '上海汽检', reportStatus: '不通过', smartDriveFeature: 'ICC', rejectReason: '报告不通过，系统未检测到明显碰撞点', supplementDesc: 'xxxxxxxx', claimStatus: '', payStatus: '', claimAmount: '', claimDetail: '', createTime: '2025/5/21 11:40:26', completeTime: '2025/5/21 11:41:15', updateTime: '2025/5/21 11:41:15', status: 'rejected' },
    { id: 'CCHSMVIC2025052819030007', vin: 'LGW6SETLF53009144', brand: 'WEY', series: 'M83', model: 'WEY M83', owner: '张三', phone: '13248223139', plate: '沪A D12345', source: '智选实销', accidentTime: '2025/5/21 11:39:31', injury: '是', scratch: '是', shopId: '723042', shop: '长城智选（海口）秀英狮子岭用户服务中心', mainStatus: '进行中', subStatus: '待享权处理', acceptStatus: '通过', acceptor: '张三丰', dataFetchStatus: '成功', provider: '国创中心', reportStatus: '通过', smartDriveFeature: 'MPA', rejectReason: '行驶证为营运性质，不符合保障范围', supplementDesc: 'xxxxxxxx', claimStatus: '', payStatus: '', claimAmount: '', claimDetail: '', createTime: '2025/5/21 11:40:26', completeTime: '2025/5/22 11:41:15', updateTime: '2025/5/22 11:41:15', status: 'pending' },
    { id: 'CCHSMVIC2025052819030008', vin: 'LGW6SETLF53009145', brand: 'WEY', series: 'M83', model: 'WEY M83', owner: '张三', phone: '13248223139', plate: '沪A D12345', source: '经销商实销', accidentTime: '2025/5/21 11:39:31', injury: '是', scratch: '是', shopId: '723042', shop: '长城智选（海口）秀英狮子岭用户服务中心', mainStatus: '进行中', subStatus: '享权处理中', acceptStatus: '通过', acceptor: '张三丰', dataFetchStatus: '成功', provider: '上海汽检', reportStatus: '通过', smartDriveFeature: 'NOA-H', rejectReason: '', supplementDesc: '', claimStatus: '通过', payStatus: '待打款', claimAmount: '', claimDetail: '', createTime: '2025/3/31 13:01:48', completeTime: '2025/3/31 13:01:48', updateTime: '2025/3/31 13:01:48', status: 'processing' },
    { id: 'CCHSMVIC2025052819030009', vin: 'LGW6SETLF53009146', brand: 'WEY', series: 'M83', model: 'WEY M83', owner: '张三', phone: '13248223139', plate: '沪A D12345', source: '智选实销', accidentTime: '2025/3/31 13:01:48', injury: '是', scratch: '是', shopId: '723042', shop: '长城智选（海口）秀英狮子岭用户服务中心', mainStatus: '已完成', subStatus: '享权终止', acceptStatus: '通过', acceptor: '张三丰', dataFetchStatus: '成功', provider: '上海汽检', reportStatus: '通过', smartDriveFeature: 'ACC', rejectReason: '您的享权被驳回，请联系客服确认', supplementDesc: '', claimStatus: '驳回', payStatus: '', claimAmount: '', claimDetail: '', createTime: '2025/3/31 13:01:48', completeTime: '2025/3/31 13:01:48', updateTime: '2025/3/31 13:01:48', status: 'terminated' },
    { id: 'CCHSMVIC2025052819030010', vin: 'LGW6SETLF53009147', brand: 'WEY', series: 'M83', model: 'WEY M83', owner: '张三', phone: '13248223139', plate: '沪A D12345', source: '智选实销', accidentTime: '2025/3/31 13:01:48', injury: '是', scratch: '是', shopId: '723042', shop: '长城智选（海口）秀英狮子岭用户服务中心', mainStatus: '已完成', subStatus: '享权完成', acceptStatus: '通过', acceptor: '张三丰', dataFetchStatus: '成功', provider: '上海汽检', reportStatus: '通过', smartDriveFeature: 'RAT', rejectReason: '您的享权被驳回，请联系客服确认', supplementDesc: '', claimStatus: '通过', payStatus: '已打款', claimAmount: '1300', claimDetail: '补偿总额1300元，基础保障补偿300元，事故维修补偿1000元', createTime: '2025/3/31 13:01:48', completeTime: '2025/3/31 13:01:48', updateTime: '2025/3/31 13:01:48', status: 'completed' },
];

const mockVinData = {
    'LGW6SETLF53009138': { brand: 'WEY', model: 'WEY M83', owner: '张三', phone: '13248223139' },
    'LGW6SETLF53009139': { brand: 'WEY', model: 'WEY M83', owner: '李四', phone: '13800138000' },
    'LGW6SETLF53009140': { brand: '哈弗', model: '哈弗H6', owner: '王五', phone: '13900139000' },
};

const mockShops = [
    '长城智选（海口）秀英狮子岭用户服务中心',
    '长城智选（北京）朝阳北路用户服务中心',
    '长城智选（上海）浦东新区用户服务中心',
    '长城智选（广州）天河区用户服务中心',
    '长城智选（深圳）南山区用户服务中心',
    '长城智选（成都）武侯区用户服务中心',
    '长城智选（杭州）西湖区用户服务中心',
    '长城智选（武汉）江汉区用户服务中心',
];

let currentTab = 'all';
let selectedRows = new Set();
let licenseFile = null;
let videoFiles = [];
let attachFiles = [];

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', function() {
    // 仅在申请记录页面自动渲染 application 表格
    if (document.getElementById('dataTable')) {
        renderTable(mockData);
    }

    // 筛选区 select 颜色控制：默认浅色，选择后深色
    document.querySelectorAll('.filter-section select').forEach(sel => {
        function updateColor() {
            if (sel.selectedIndex > 0) {
                sel.classList.add('has-value');
            } else {
                sel.classList.remove('has-value');
            }
        }
        sel.addEventListener('change', updateColor);
        updateColor();
    });
});

// ===== 侧边栏 =====
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const body = document.body;
    // PC端：折叠/展开侧边栏
    if (window.innerWidth > 768) {
        sidebar.classList.toggle('collapsed');
        body.classList.toggle('sidebar-collapsed');
        const btn = document.querySelector('.header-icon-btn[onclick="toggleSidebar()"]');
        if (btn) {
            btn.title = sidebar.classList.contains('collapsed') ? '展开菜单' : '收起菜单';
        }
    } else {
        // 移动端：使用overlay遮罩
        const overlay = document.getElementById('sidebar-overlay');
        sidebar.classList.toggle('open');
        overlay.classList.toggle('show');
    }
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            showToast('全屏模式不支持: ' + err.message);
        });
    } else {
        document.exitFullscreen();
    }
}

function toggleSubmenu(el) {
    const li = el.parentElement;
    li.classList.toggle('open');
}

// ===== 表格渲染 =====
function renderTable(data) {
    const tbody = document.getElementById('tableBody');
    let html = '';
    data.forEach((row, index) => {
        const checked = selectedRows.has(index) ? 'checked' : '';
        const shopShort = row.shop.length > 12 ? row.shop.substring(0, 12) + '...' : row.shop;
        const rejectShort = row.rejectReason && row.rejectReason.length > 14 ? row.rejectReason.substring(0, 14) + '...' : (row.rejectReason || '');
        const claimShort = row.claimDetail && row.claimDetail.length > 14 ? row.claimDetail.substring(0, 14) + '...' : (row.claimDetail || '');
        html += `
            <tr>
                <td class="col-checkbox"><input type="checkbox" ${checked} onchange="toggleRow(${index})"></td>
                <td>${row.id}</td>
                <td>${row.vin}</td>
                <td>${row.brand}</td>
                <td>${row.series}</td>
                <td>${row.model}</td>
                <td>${row.owner}</td>
                <td>${row.phone}</td>
                <td>${row.plate}</td>
                <td>${row.source}</td>
                <td>${row.accidentTime}</td>
                <td>${row.injury}</td>
                <td>${row.scratch}</td>
                <td>${row.shopId}</td>
                <td title="${row.shop}">${shopShort}</td>
                <td>${row.mainStatus}</td>
                <td>${row.subStatus}</td>
                <td>${row.acceptStatus}</td>
                <td>${row.acceptor}</td>
                <td>${row.dataFetchStatus}</td>
                <td>${row.provider}</td>
                <td>${row.reportStatus}</td>
                <td>${row.smartDriveFeature}</td>
                <td title="${row.rejectReason || ''}">${rejectShort}</td>
                <td>${row.supplementDesc || ''}</td>
                <td>${row.claimStatus}</td>
                <td>${row.payStatus}</td>
                <td>${row.claimAmount}</td>
                <td title="${row.claimDetail || ''}">${claimShort}</td>
                <td>${row.createTime}</td>
                <td>${row.completeTime}</td>
                <td>${row.updateTime}</td>
                <td class="col-action">
                    <a class="action-link" onclick="showDetail('${row.id}')">详情</a>
                    <a class="action-link" onclick="downloadAttach('${row.id}', '${row.vin}', '${row.model}', '${row.owner}', '${row.phone}')">下载附件</a>
                </td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
}

function toggleRow(index) {
    if (selectedRows.has(index)) {
        selectedRows.delete(index);
    } else {
        selectedRows.add(index);
    }
    updateCheckAllState();
}

function toggleCheckAll() {
    const checkAll = document.getElementById('checkAll');
    const checkboxes = document.querySelectorAll('#tableBody input[type="checkbox"]');
    if (checkAll.checked) {
        checkboxes.forEach((cb, i) => {
            cb.checked = true;
            selectedRows.add(i);
        });
    } else {
        checkboxes.forEach((cb, i) => {
            cb.checked = false;
            selectedRows.delete(i);
        });
    }
}

function updateCheckAllState() {
    const checkAll = document.getElementById('checkAll');
    const checkboxes = document.querySelectorAll('#tableBody input[type="checkbox"]');
    const checkedCount = document.querySelectorAll('#tableBody input[type="checkbox"]:checked').length;
    checkAll.checked = checkedCount === checkboxes.length && checkboxes.length > 0;
    checkAll.indeterminate = checkedCount > 0 && checkedCount < checkboxes.length;
}

// ===== 标签切换 =====
function switchTab(el, tab) {
    document.querySelectorAll('.status-tabs .tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    currentTab = tab;
    let filtered = mockData;
    if (tab !== 'all') {
        filtered = mockData.filter(row => row.status === tab);
    }
    renderTable(filtered);
    selectedRows.clear();
    document.getElementById('checkAll').checked = false;
}

// ===== 筛选 =====
function doSearch() {
    showToast('查询成功');
    // 实际项目中这里会执行筛选逻辑
}

function resetFilter() {
    document.querySelectorAll('.filter-section input, .filter-section select').forEach(el => {
        if (el.tagName === 'SELECT') {
            el.selectedIndex = 0;
        } else {
            el.value = '';
        }
    });
    showToast('已重置');
}

// ===== 操作按钮 =====
function acceptReport() {
    if (selectedRows.size === 0) {
        showToast('请先选择记录');
        return;
    }
    showToast(`已受理通过 ${selectedRows.size} 条记录`);
}

function rejectReport() {
    if (selectedRows.size === 0) {
        showToast('请先选择记录');
        return;
    }
    showToast(`已受理驳回 ${selectedRows.size} 条记录`);
}

function createExport() {
    showToast('导出任务已创建，请前往导出管理下载');
}

function showDetail(id) {
    const row = mockData.find(r => r.id === id);
    if (!row) {
        showToast('记录不存在');
        return;
    }

    const contentWrapper = document.getElementById('contentWrapper');
    const detailView = document.getElementById('detailView');
    const statusLeftEl = document.getElementById('detailStatusLeft');
    const statusRightEl = document.getElementById('detailStatusRight');
    const infoListEl = document.getElementById('detailInfoList');
    const timelineEl = document.getElementById('detailTimeline');

    // 顶部状态区 - 左侧字段列表
    const statusRows = [];
    statusRows.push({ label: '主状态', value: row.mainStatus || '-', cls: 'primary' });
    statusRows.push({ label: '子状态', value: row.subStatus || '-', cls: row.subStatus === '申请未通过' ? 'danger' : 'primary' });

    // 受理状态 - 未通过时红色
    let acceptCls = '';
    if (row.acceptStatus === '通过') acceptCls = 'success';
    else if (row.acceptStatus === '驳回') acceptCls = 'danger';
    statusRows.push({ label: '受理状态', value: row.acceptStatus || '-', cls: acceptCls });

    // 数据调取状态
    let dataCls = '';
    if (row.dataFetchStatus === '成功') dataCls = 'success';
    else if (row.dataFetchStatus === '失败') dataCls = 'danger';
    statusRows.push({ label: '数据调取状态', value: row.dataFetchStatus || '-', cls: dataCls });

    // 事故分析报告状态
    let reportCls = '';
    if (row.reportStatus === '通过') reportCls = 'success';
    else if (row.reportStatus === '不通过') reportCls = 'danger';
    else if (row.reportStatus === '待盖章') reportCls = 'warning';
    statusRows.push({ label: '事故分析报告状态', value: row.reportStatus || '-', cls: reportCls });

    let statusHtml = statusRows.map(r => `
        <div class="detail-status-row">
            <span class="status-label">${r.label}:</span>
            <span class="status-value ${r.cls}">${r.value}</span>
        </div>
    `).join('');

    // 申请未通过时追加驳回理由
    if (row.subStatus === '申请未通过' && row.rejectReason) {
        statusHtml += `
            <div class="detail-status-row reject-reason-row">
                <span class="status-label">驳回理由:</span>
                <span class="status-value">${row.rejectReason}</span>
            </div>
        `;
    }
    statusLeftEl.innerHTML = statusHtml;

    // 顶部状态区 - 右侧按钮
    if (row.subStatus === '申请已提交') {
        statusRightEl.innerHTML = `
            <button class="btn btn-primary" onclick="detailAccept('${row.id}')">受理通过</button>
            <button class="btn btn-primary" onclick="detailReject('${row.id}')">受理驳回</button>
            <button class="btn btn-primary" onclick="closeDetail()">返回</button>
        `;
    } else if (row.subStatus === '申请未通过') {
        statusRightEl.innerHTML = `
            <button class="btn btn-primary" onclick="detailCorrectTime('${row.id}')">
                更正事故时间
                <span class="btn-badge">1</span>
            </button>
            <button class="btn btn-primary" onclick="closeDetail()">返回</button>
        `;
    } else {
        statusRightEl.innerHTML = `<button class="btn btn-primary" onclick="closeDetail()">返回</button>`;
    }

    // 左侧申请信息列表
    const infoItems = [
        { label: '申请ID', value: row.id },
        { label: 'VIN', value: row.vin },
        { label: '品牌', value: row.brand },
        { label: '车系', value: row.series },
        { label: '车型', value: row.model },
        { label: '车主姓名', value: row.owner },
        { label: '车主手机号', value: row.phone },
        { label: '车牌号码', value: row.plate },
        { label: '权益来源', value: row.source },
        { label: '事故发生时间', value: row.accidentTime },
        { label: '是否涉及人伤', value: row.injury },
        { label: '行驶证', value: '<span class="img-placeholder">&#128444;</span>' },
        { label: '维修门店ID', value: row.shopId },
        { label: '维修门店', value: row.shop },
        { label: '是否轻微剐蹭', value: row.scratch },
        { label: '行车录像视频', value: '<span class="img-placeholder video">&#9654;</span>' },
        { label: '定责服务商', value: row.provider },
        { label: '事故分析报告', value: '<span class="img-placeholder pdf">&#128196;</span>' },
        { label: '申请补充附件', value: '<span class="img-placeholder">&#128444;</span><span class="img-placeholder">&#128444;</span><span class="img-placeholder">&#128444;</span><span class="img-placeholder pdf">&#128196;</span><span class="img-placeholder pdf">&#128196;</span>' },
        { label: '申请补充说明', value: row.supplementDesc || '-' },
        { label: '享权判定状态', value: row.claimStatus || '-' },
        { label: '权益支付状态', value: row.payStatus || '-' },
        { label: '理赔金额/元', value: row.claimAmount || '-' },
        { label: '理赔明细', value: row.claimDetail || '-' },
        { label: '创建时间', value: row.createTime },
        { label: '定责完成时间', value: row.completeTime || '-' },
        { label: '更新时间', value: row.updateTime || '-' },
        { label: '操作人', value: row.acceptor || '-' },
    ];
    infoListEl.innerHTML = infoItems.map(item => `
        <div class="detail-info-item">
            <span class="info-label">${item.label}</span>
            <span class="info-value">${item.value || '-'}</span>
        </div>
    `).join('');

    // 右侧时间轴
    const timelineData = buildTimeline(row);
    timelineEl.innerHTML = timelineData.map(item => `
        <div class="timeline-item ${item.status}">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-time">${item.time}</div>
                <div class="timeline-title">${item.title}</div>
            </div>
        </div>
    `).join('');

    // 切换显示：隐藏列表，显示详情
    contentWrapper.style.display = 'none';
    const mainContent = document.querySelector('.main-content');
    if (mainContent) mainContent.classList.add('has-detail');
    detailView.style.display = 'flex';
}

function closeDetail() {
    document.getElementById('contentWrapper').style.display = 'block';
    const mainContent = document.querySelector('.main-content');
    if (mainContent) mainContent.classList.remove('has-detail');
    document.getElementById('detailView').style.display = 'none';
}

function detailAccept(id) {
    showToast(`已受理通过: ${id}`);
    closeDetail();
}

function detailReject(id) {
    showToast(`已受理驳回: ${id}`);
    closeDetail();
}

function detailCorrectTime(id) {
    showToast(`更正事故时间: ${id}`);
    closeDetail();
}

function buildTimeline(row) {
    const steps = [];

    // 根据子状态和数据生成时间轴（倒序，最新的在上面）
    // 先收集所有步骤，最后倒序
    const rawSteps = [];

    // 1. 提交申请（车主端）
    rawSteps.push({
        time: row.createTime,
        title: '<span class="timeline-source">【车主端】</span><span class="timeline-action">提交申请</span>',
        status: 'completed'
    });

    // 2. 受理阶段
    if (row.acceptStatus === '驳回') {
        rawSteps.push({
            time: row.updateTime,
            title: '<span class="timeline-source">【车企端】</span><span class="timeline-action">受理驳回</span>',
            status: 'active'
        });
    } else if (row.acceptStatus === '通过') {
        rawSteps.push({
            time: row.completeTime || row.updateTime,
            title: '<span class="timeline-source">【车企端】</span><span class="timeline-action">受理通过</span>',
            status: 'completed'
        });
    }

    // 3. 数据调取阶段
    if (row.dataFetchStatus === '成功') {
        rawSteps.push({
            time: row.updateTime,
            title: '<span class="timeline-source">【检测端】</span><span class="timeline-action">调取数据成功</span>',
            status: 'completed'
        });
    } else if (row.dataFetchStatus === '失败') {
        rawSteps.push({
            time: row.updateTime,
            title: '<span class="timeline-source">【检测端】</span><span class="timeline-highlight">调取数据失败</span>',
            status: 'active'
        });
    }

    // 4. 事故报告分析
    if (row.reportStatus === '通过') {
        rawSteps.push({
            time: row.updateTime,
            title: '<span class="timeline-source">【检测端】</span><span class="timeline-action">事故报告分析，结论通过</span>',
            status: 'completed'
        });
    } else if (row.reportStatus === '不通过') {
        rawSteps.push({
            time: row.updateTime,
            title: '<span class="timeline-source">【检测端】</span><span class="timeline-action">事故报告分析，结论</span><span class="timeline-highlight">不通过</span>',
            status: 'active'
        });
    } else if (row.reportStatus === '待盖章') {
        rawSteps.push({
            time: row.updateTime,
            title: '<span class="timeline-source">【检测端】</span><span class="timeline-action">事故报告分析，待盖章</span>',
            status: 'active'
        });
    }

    // 5. 车主申诉
    if (row.subStatus === '申请未通过') {
        rawSteps.push({
            time: row.updateTime,
            title: '<span class="timeline-source">【车主端】</span><span class="timeline-highlight">发起调取申诉</span>',
            status: 'active'
        });
        rawSteps.push({
            time: row.updateTime,
            title: '<span class="timeline-source">【车主端】</span><span class="timeline-highlight">发起报告申诉</span>',
            status: 'active'
        });
    }

    // 6. 享权判定
    if (row.claimStatus === '通过') {
        rawSteps.push({
            time: row.updateTime,
            title: '<span class="timeline-source">【保司端】</span><span class="timeline-action">享权判定通过</span>',
            status: 'completed'
        });
    } else if (row.claimStatus === '驳回') {
        rawSteps.push({
            time: row.updateTime,
            title: '<span class="timeline-source">【保司端】</span><span class="timeline-highlight">享权判定驳回</span>',
            status: 'active'
        });
    }

    // 7. 支付状态
    if (row.payStatus === '已打款') {
        rawSteps.push({
            time: row.updateTime,
            title: '<span class="timeline-source">【保司端】</span><span class="timeline-action">权益支付已打款</span>' + (row.claimAmount ? `，理赔金额${row.claimAmount}元` : ''),
            status: 'completed'
        });
    } else if (row.payStatus === '待打款') {
        rawSteps.push({
            time: row.updateTime,
            title: '<span class="timeline-source">【保司端】</span><span class="timeline-action">权益支付待打款</span>',
            status: 'active'
        });
    }

    // 倒序排列（最新的在上面）
    return rawSteps.reverse();
}

function downloadAttach(id, vin, model, owner, phone) {
    // 生成文件名：申请记录附件-yyyymmddhhmmss.zip
    const now = new Date();
    const pad = n => String(n).padStart(2, '0');
    const ts = `${now.getFullYear()}${pad(now.getMonth()+1)}${pad(now.getDate())}${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
    const filename = `申请记录附件-${ts}.zip`;

    // 构建 ZIP 内容
    const zip = new JSZip();
    const folder = zip.folder("申请记录附件");
    folder.file("说明.txt", `申请ID: ${id}\nVIN: ${vin}\n车型: ${model}\n车主: ${owner}\n手机号: ${phone}\n生成时间: ${now.toLocaleString()}`);
    folder.file("行驶证.jpg", "", { base64: true });
    folder.file("行车记录视频_01.mp4", "", { base64: true });
    folder.file("补充附件_01.pdf", "", { base64: true });

    zip.generateAsync({ type: "blob" }).then(function(content) {
        const url = URL.createObjectURL(content);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast(`附件已下载: ${filename}`);
    }).catch(function(err) {
        showToast('下载失败: ' + err.message);
    });
}

// ===== 手动报案弹窗 =====
function openManualReport() {
    document.getElementById('manualReportModal').classList.add('show');
    document.body.style.overflow = 'hidden';
    resetManualReportForm();
}

function closeManualReport() {
    document.getElementById('manualReportModal').classList.remove('show');
    document.body.style.overflow = '';
}

function resetManualReportForm() {
    document.getElementById('manualReportForm').reset();
    document.getElementById('mr-brand').value = '';
    document.getElementById('mr-model').value = '';
    document.getElementById('mr-owner').value = '';
    document.getElementById('mr-phone').value = '';
    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
    licenseFile = null;
    videoFiles = [];
    attachFiles = [];
    updateLicensePreview();
    updateVideoPreview();
    updateAttachPreview();
    document.getElementById('charCount').textContent = '0';
}

// 点击弹窗外部关闭
window.onclick = function(e) {
    const manualModal = document.getElementById('manualReportModal');
    if (e.target === manualModal) {
        closeManualReport();
    }
}

// ===== VIN自动匹配 =====
function onVinInput(vin) {
    if (vin.length >= 17) {
        const data = mockVinData[vin];
        if (data) {
            document.getElementById('mr-brand').value = data.brand;
            document.getElementById('mr-model').value = data.model;
            document.getElementById('mr-owner').value = data.owner;
            document.getElementById('mr-phone').value = data.phone;
            showToast('已自动匹配车辆信息');
        } else {
            document.getElementById('mr-brand').value = '';
            document.getElementById('mr-model').value = '';
            document.getElementById('mr-owner').value = '';
            document.getElementById('mr-phone').value = '';
        }
    } else {
        document.getElementById('mr-brand').value = '';
        document.getElementById('mr-model').value = '';
        document.getElementById('mr-owner').value = '';
        document.getElementById('mr-phone').value = '';
    }
}

// ===== 门店模糊查询 =====
function onShopSearch(keyword) {
    const dropdown = document.getElementById('shopDropdown');
    if (!keyword || keyword.length < 1) {
        dropdown.classList.remove('show');
        return;
    }
    const filtered = mockShops.filter(s => s.includes(keyword));
    if (filtered.length > 0) {
        dropdown.innerHTML = filtered.map(s => `<li onclick="selectShop('${s}')">${s}</li>`).join('');
        dropdown.classList.add('show');
    } else {
        dropdown.classList.remove('show');
    }
}

function selectShop(shop) {
    document.getElementById('mr-shop').value = shop;
    document.getElementById('shopDropdown').classList.remove('show');
}

// 点击外部关闭下拉
window.addEventListener('click', function(e) {
    const shopInput = document.getElementById('mr-shop');
    const dropdown = document.getElementById('shopDropdown');
    if (e.target !== shopInput && !dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
    }
});

// ===== 文件上传 =====
function onLicenseUpload(input) {
    if (input.files && input.files[0]) {
        licenseFile = input.files[0];
        updateLicensePreview();
    }
}

function updateLicensePreview() {
    const placeholder = document.getElementById('licensePlaceholder');
    const preview = document.getElementById('licensePreview');
    const fileName = document.getElementById('licenseFileName');
    if (licenseFile) {
        placeholder.style.display = 'none';
        preview.style.display = 'flex';
        fileName.textContent = licenseFile.name;
    } else {
        placeholder.style.display = 'flex';
        preview.style.display = 'none';
    }
}

function removeLicense() {
    licenseFile = null;
    document.getElementById('mr-license').value = '';
    updateLicensePreview();
}

function onVideoUpload(input) {
    if (input.files && input.files[0]) {
        const file = input.files[0];
        if (file.size > 200 * 1024 * 1024) {
            showToast('视频大小不能超过200M');
            input.value = '';
            return;
        }
        if (videoFiles.length >= 5) {
            showToast('最多上传5个视频');
            input.value = '';
            return;
        }
        videoFiles.push(file);
        updateVideoPreview();
        input.value = '';
    }
}

function updateVideoPreview() {
    const placeholder = document.getElementById('videoPlaceholder');
    const previewList = document.getElementById('videoPreviewList');
    if (videoFiles.length > 0) {
        placeholder.style.display = 'none';
        previewList.style.display = 'flex';
        previewList.innerHTML = videoFiles.map((f, i) => `
            <div class="upload-preview-item">
                <span>${f.name}</span>
                <span class="file-remove" onclick="removeVideo(${i})">&times;</span>
            </div>
        `).join('');
    } else {
        placeholder.style.display = 'flex';
        previewList.style.display = 'none';
    }
}

function removeVideo(index) {
    videoFiles.splice(index, 1);
    updateVideoPreview();
}

function onAttachUpload(input) {
    if (input.files) {
        const files = Array.from(input.files);
        if (attachFiles.length + files.length > 5) {
            showToast('补充附件最多5个');
            input.value = '';
            return;
        }
        attachFiles.push(...files);
        updateAttachPreview();
        input.value = '';
    }
}

function updateAttachPreview() {
    const placeholder = document.getElementById('attachPlaceholder');
    const previewList = document.getElementById('attachPreviewList');
    if (attachFiles.length > 0) {
        placeholder.style.display = 'none';
        previewList.style.display = 'flex';
        previewList.innerHTML = attachFiles.map((f, i) => `
            <div class="upload-preview-item">
                <span>${f.name}</span>
                <span class="file-remove" onclick="removeAttach(${i})">&times;</span>
            </div>
        `).join('');
    } else {
        placeholder.style.display = 'flex';
        previewList.style.display = 'none';
    }
}

function removeAttach(index) {
    attachFiles.splice(index, 1);
    updateAttachPreview();
}

// ===== 字符计数 =====
function updateCharCount(textarea) {
    document.getElementById('charCount').textContent = textarea.value.length;
}

// ===== 表单验证与提交 =====
function submitManualReport() {
    let valid = true;
    const vin = document.getElementById('mr-vin').value.trim();
    const brand = document.getElementById('mr-brand').value.trim();
    const model = document.getElementById('mr-model').value.trim();
    const owner = document.getElementById('mr-owner').value.trim();
    const phone = document.getElementById('mr-phone').value.trim();
    const plate = document.getElementById('mr-plate').value.trim();
    const accidentTime = document.getElementById('mr-accident-time').value;
    const injury = document.getElementById('mr-injury').value;
    const shop = document.getElementById('mr-shop').value.trim();

    // 重置错误
    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

    if (!vin) {
        document.getElementById('err-vin').textContent = '请输入VIN';
        valid = false;
    } else if (!/^[A-HJ-NPR-Z0-9]{17}$/i.test(vin)) {
        document.getElementById('err-vin').textContent = 'VIN必须为17位字母和数字组合';
        valid = false;
    }

    if (!brand) {
        document.getElementById('err-brand').textContent = '品牌不能为空，请先输入VIN';
        valid = false;
    }

    if (!model) {
        document.getElementById('err-model').textContent = '车型不能为空，请先输入VIN';
        valid = false;
    }

    if (!owner) {
        document.getElementById('err-owner').textContent = '请输入车主姓名';
        valid = false;
    }

    if (!phone) {
        document.getElementById('err-phone').textContent = '请输入车主手机号';
        valid = false;
    } else if (!/^1[3-9]\d{9}$/.test(phone)) {
        document.getElementById('err-phone').textContent = '手机号格式不正确，请输入11位有效手机号';
        valid = false;
    }

    if (!plate) {
        document.getElementById('err-plate').textContent = '请输入车牌号码';
        valid = false;
    }

    if (!accidentTime) {
        document.getElementById('err-accident-time').textContent = '请选择事故发生时间';
        valid = false;
    }

    if (!injury) {
        document.getElementById('err-injury').textContent = '请选择是否涉及人伤';
        valid = false;
    }

    if (!shop) {
        document.getElementById('err-shop').textContent = '请选择维修门店';
        valid = false;
    }

    if (!licenseFile) {
        document.getElementById('err-license').textContent = '请上传行驶证';
        valid = false;
    }

    if (videoFiles.length === 0) {
        document.getElementById('err-video').textContent = '请上传行车记录视频';
        valid = false;
    }

    if (!valid) return;

    // 二次确认
    document.getElementById('confirmSubmitModal').classList.add('show');
}

function closeConfirmSubmit() {
    document.getElementById('confirmSubmitModal').classList.remove('show');
}

function doConfirmSubmit() {
    closeConfirmSubmit();

    const vin = document.getElementById('mr-vin').value.trim();
    const plate = document.getElementById('mr-plate').value.trim();
    const accidentTime = document.getElementById('mr-accident-time').value;
    const injury = document.getElementById('mr-injury').value;
    const shop = document.getElementById('mr-shop').value.trim();

    // 生成新记录
    const newRecord = {
        id: generateApplyId(vin),
        vin: vin,
        brand: document.getElementById('mr-brand').value || 'WEY',
        series: 'M83',
        model: document.getElementById('mr-model').value || 'WEY M83',
        owner: document.getElementById('mr-owner').value || '未知',
        phone: document.getElementById('mr-phone').value || '-',
        plate: plate,
        source: '人工导入',
        accidentTime: accidentTime.replace('T', ' ').replace(/-/g, '/'),
        injury: injury === '1' ? '是' : '否',
        scratch: '是',
        shopId: '999999',
        shop: shop,
        mainStatus: '进行中',
        subStatus: '申请已提交',
        acceptStatus: '',
        acceptor: '',
        dataFetchStatus: '',
        provider: '上海汽检',
        reportStatus: '',
        rejectReason: '',
        supplementDesc: document.getElementById('mr-remark').value || '',
        claimStatus: '',
        payStatus: '',
        claimAmount: '',
        claimDetail: '',
        createTime: new Date().toLocaleString('zh-CN', { hour12: false }).replace(/\//g, '/'),
        completeTime: '',
        updateTime: '',
        status: 'submitted'
    };

    mockData.unshift(newRecord);
    renderTable(mockData);
    closeManualReport();
    showToast('手动报案成功');
}

function generateApplyId(vin) {
    const brand = vin.substring(0, 3).toUpperCase();
    const now = new Date();
    const ymdhms = now.getFullYear().toString() +
        String(now.getMonth()+1).padStart(2, '0') +
        String(now.getDate()).padStart(2, '0') +
        String(now.getHours()).padStart(2, '0') +
        String(now.getMinutes()).padStart(2, '0');
    const seq = String(Math.floor(Math.random() * 9000) + 1000);
    return brand + 'SMVIC' + ymdhms + seq;
}

// ===== 菜单点击 =====
function onMenuClick(el, hasPage) {
    if (!hasPage) {
        showToast('暂无数据');
        return false;
    }
    return true;
}

// ===== Toast =====
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== 关闭页面 =====
function closePage() {
    const wrapper = document.getElementById('contentWrapper');
    const welcome = document.getElementById('welcomeBg');
    const tabBar = document.getElementById('tabBar');
    if (wrapper) wrapper.classList.add('hidden');
    if (welcome) welcome.classList.add('show');
    if (tabBar) tabBar.style.display = 'none';
}

// ===== 日期时间范围选择器 =====
let activePicker = null;

function openDateTimeRangePicker(inputEl, pickerId) {
    // Close any open picker first
    document.querySelectorAll('.datetime-range-picker').forEach(p => p.classList.remove('show'));
    const picker = document.getElementById(pickerId);
    picker.classList.add('show');
    document.getElementById('pickerOverlay').classList.add('show');
    activePicker = pickerId;
}

function closeDateTimePicker(pickerId) {
    document.getElementById(pickerId).classList.remove('show');
    document.getElementById('pickerOverlay').classList.remove('show');
    activePicker = null;
}

function closeAllDateTimePickers() {
    document.querySelectorAll('.datetime-range-picker').forEach(p => p.classList.remove('show'));
    document.getElementById('pickerOverlay').classList.remove('show');
    activePicker = null;
}

function confirmDateTimeRange(inputId, pickerId) {
    const picker = document.getElementById(pickerId);
    const input = document.getElementById(inputId);
    const startInput = picker.querySelector('input[type="datetime-local"]:first-of-type');
    const endInput = picker.querySelector('input[type="datetime-local"]:last-of-type');
    
    if (startInput.value && endInput.value) {
        const start = startInput.value.replace('T', ' ');
        const end = endInput.value.replace('T', ' ');
        input.value = start + ' ~ ' + end;
    } else if (startInput.value) {
        input.value = startInput.value.replace('T', ' ') + ' ~ ';
    } else if (endInput.value) {
        input.value = ' ~ ' + endInput.value.replace('T', ' ');
    }
    
    picker.classList.remove('show');
    document.getElementById('pickerOverlay').classList.remove('show');
    activePicker = null;
}

function clearDateTimeRange(inputId, pickerId) {
    const picker = document.getElementById(pickerId);
    const input = document.getElementById(inputId);
    picker.querySelectorAll('input[type="datetime-local"]').forEach(el => el.value = '');
    input.value = '';
    picker.classList.remove('show');
    document.getElementById('pickerOverlay').classList.remove('show');
    activePicker = null;
}

// Click outside to close picker
window.addEventListener('click', function(e) {
    if (!activePicker) return;
    const picker = document.getElementById(activePicker);
    const input = document.querySelector('[onclick*="' + activePicker + '"');
    if (picker && !picker.contains(e.target) && e.target !== input) {
        picker.classList.remove('show');
        document.getElementById('pickerOverlay').classList.remove('show');
        activePicker = null;
    }
});
