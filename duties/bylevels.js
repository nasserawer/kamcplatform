// Sample Data
const tasks = [
    { id: 1, name: "التبليغ عن معلومات تكون ذات أهمية للاستخبارات", station: "الأولى (المراقبة والاتصال)", level: "الأول", number: "2-1-2001-1-001" },
    { id: 2, name: "استخدام معدات الاتصال السلكية واللاسلكية", station: "الأولى (المراقبة والاتصال)", level: "الأول", number: "2-1-2001-1-002" },
    { id: 3, name: "تنفيذ الاتصالات السلكية واللاسلكية", station: "الأولى (المراقبة والاتصال)", level: "الأول", number: "2-1-2001-1-003" },
    { id: 4, name: "التعرف على الرموز الطبوغرافية الموجودة على الخريطة", station: "الثانية (الملاحة)", level: "الأول", number: "2-1-2001-2-004" },
    { id: 5, name: "المسدس عيار 9", station: "الثالثة (الأسلحة الفردية والقنابل اليدوية والألغام الأرضية)", level: "الأول", number: "2-1-2001-3-012" },
    { id: 6, name: "المسدس الجلوك عيار (9x19) نمساوي", station: "الثالثة (الأسلحة الفردية والقنابل اليدوية والألغام الأرضية)", level: "الأول", number: "2-1-2001-3-013" },
    { id: 7, name: "بندقية ج3", station: "الثالثة (الأسلحة الفردية والقنابل اليدوية والألغام الأرضية)", level: "الأول", number: "2-1-2001-3-015" },
    { id: 8, name: "تنفيذ التموية الفردي", station: "الرابعة (المحافظة على البقاء)", level: "الأول", number: "2-1-2001-4-028" },
    { id: 9, name: "تحديد مكان الألغام بالمجس", station: "الرابعة (المحافظة على البقاء)", level: "الأول", number: "2-1-2001-4-029" },
    { id: 10, name: "الوقاية من الإصابة بالتلوث الكيميائي والبيولوجي باستخدام القناع", station: "الخامسة (الوقاية من الهجوم النووي والبيولوجي والإشعاعي والكيماوي)", level: "الأول", number: "2-1-2001-5-047" },
    { id: 11, name: "تقرير الإصابة", station: "السادسة (تقديم الإسعافات الأولية)", level: "الأول", number: "2-1-2001-6-068" },
    { id: 12, name: "تنفيذ عمليات القتال طبقًا لقانون الحرب", station: "السابعة (قوانين الحرب وتداول الموتى)", level: "الأول", number: "2-1-2001-7-086" },
    { id: 13, name: "الابلاغ عن الخسائر البشرية", station: "الأولى (المراقبة والاتصال)", level: "الثاني", number: "2-1-2002-1-088" },
    { id: 14, name: "تشغيل معدات الاتصال السلكية", station: "الأولى (المراقبة والاتصال)", level: "الثاني", number: "2-1-2002-1-089" },
    { id: 15, name: "تشغيل معدات الاتصال اللاسلكية", station: "الأولى (المراقبة والاتصال)", level: "الثاني", number: "2-1-2002-1-090" },
    { id: 16, name: "اختبار طريق التحرك باستخدام الخريطة", station: "الثانية (الملاحة)", level: "الثاني", number: "2-1-2002-2-091" },
    { id: 17, name: "تعيين ارتفاع نقطة على الأرض باستخدام الخريطة", station: "الثانية (الملاحة)", level: "الثاني", number: "2-1-2002-2-092" },
    { id: 18, name: "ابطال مفعول الشراك الخداعية", station: "الرابعة (المحافظة على البقاء)", level: "الثاني", number: "2-1-2002-4-101" },
    { id: 19, name: "استخدام طقم جهاز الكشف عن العوامل الكيماوية", station: "الخامسة (الوقاية من الهجوم النووي والبيولوجي والإشعاعي والكيماوي)", level: "الثاني", number: "2-1-2002-5-111" },
    { id: 20, name: "حل مشكلة أخلاقية", station: "الثامنة (الإدارة والتنظيم)", level: "الثاني", number: "2-1-2002-8-166" },
    { id: 21, name: "تطبيق القانون الموحد للقضاء العسكري", station: "الثامنة (الإدارة والتنظيم)", level: "الثاني", number: "2-1-2002-8-167" },
    { id: 22, name: "فرض الامتثال لقواعد وسائل الاعلام", station: "الثامنة (الإدارة والتنظيم)", level: "الثاني", number: "2-1-2002-8-168" },
    { id: 23, name: "انشاء مركز ملاحظة", station: "الأولى (المراقبة والاتصال)", level: "الثالث", number: "2-1-2003-1-116" },
    { id: 24, name: "تفتيش الأفراد والمعدات", station: "الأولى (المراقبة والاتصال)", level: "الثالث", number: "2-1-2003-1-117" },
    { id: 25, name: "تحديد المواقع والعمليات الملاحية عن طريق أجهزة الملاحة ماجلان", station: "الثانية (الملاحة)", level: "الثالث", number: "2-1-2003-2-122" },
    { id: 26, name: "مباشرة انشاء العوائق غير المتفجرة المضادة للعربات", station: "الرابعة (المحافظة على البقاء)", level: "الثالث", number: "2-1-2003-4-124" },
    { id: 27, name: "تنفيذ اجراءات خلع القناع", station: "الخامسة (الوقاية من الهجوم النووي والبيولوجي والإشعاعي والكيماوي)", level: "الثالث", number: "2-1-2003-5-136" },
    { id: 28, name: "الإشراف على عبور منطقة ملوثة", station: "الخامسة (الوقاية من الهجوم النووي والبيولوجي والإشعاعي والكيماوي)", level: "الثالث", number: "2-1-2003-5-137" },
    { id: 29, name: "تنفيذ برامج منع الجريمة بالوحدة", station: "الثامنة (الإدارة والتنظيم)", level: "الثالث", number: "2-1-2003-8-179" },
    { id: 31, name: "تنفيذ استطلاع منطقة بواسطة الفصيل", station: "الأولى (المراقبة والاتصال)", level: "الرابع", number: "2-1-2004-1-145" },
    { id: 32, name: "اعداد شفاف استطلاع طريق", station: "الثانية (الملاحة)", level: "الرابع", number: "2-1-2004-2-147" },
    { id: 33, name: "اعداد مخطط نيران قطاع الفصيل", station: "الثالثة (الأسلحة الفردية والقنابل اليدوية والألغام الأرضية)", level: "الرابع", number: "2-1-2004-3-149" },
    { id: 34, name: "تنفيذ مسير تكتيكي", station: "الرابعة (المحافظة على البقاء)", level: "الرابع", number: "2-1-2004-4-150" },
    { id: 35, name: "الاشراف على إعداد الوحدة لمواجهة هجوم نووي بيولوجي إشعاعي كيماوي", station: "الخامسة (الوقاية من الهجوم النووي والبيولوجي والإشعاعي والكيماوي)", level: "الرابع", number: "2-1-2004-5-164" },
];

// DOM Elements
const tasksContainer = document.querySelector(".tasks-container");
const levelButtons = document.querySelectorAll(".level-buttons button");

// Function to render tasks
function renderTasks(tasks) {
    tasksContainer.innerHTML = ""; // Clear existing tasks
    const taskList = document.createElement("ul");
    taskList.classList.add("task-list");

    tasks.forEach(task => {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `
            <h3>${task.name}</h3>
            <p><strong>المحطة:</strong> ${task.station}</p>
            <p><strong>المستوى المهاري:</strong> ${task.level}</p>
            <p><strong>الرقم التسلسلي:</strong> ${task.number}</p>
        `;
        taskList.appendChild(taskItem);
    });

    tasksContainer.appendChild(taskList);
}

// Filter tasks by level
levelButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedLevel = button.getAttribute("data-level");
        const filteredTasks = tasks.filter(task => task.level === selectedLevel);
        renderTasks(filteredTasks);
    });
});

// Initial Render (Show all tasks)
renderTasks(tasks);
